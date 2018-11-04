var express = require('express');
var router = express.Router();
const paypal = require("./config").paypal;

let temp = {};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/authorize_payment', function(req, res, next) {
	var payReq = JSON.stringify({
	  	intent:'authorize',
	  	payer:{
	    	payment_method:'paypal'
	  	},
	  	redirect_urls:{
	    	return_url:'http://localhost:3000',
	    	cancel_url:'http://localhost:3000'
	  	},
	  	transactions:[{
	    	amount:{
	      		total:'10',
	      		currency:'USD'
	    	},
	    	description:'This is the payment transaction description.'
	  	}]
	});

	paypal.payment.create(payReq, function(error, payment){
  		var links = {};

  		if(error){
    		console.error(JSON.stringify(error));
  		} else {
    		// Capture HATEOAS links
    		payment.links.forEach(function(linkObj){
      		links[linkObj.rel] = {
        		href: linkObj.href,
        		method: linkObj.method
      			};
    		})
    		temp["paymentId"] = payment.id;

	    	// If the redirect URL is present, redirect the customer to that URL
	    	if (links.hasOwnProperty('approval_url')){
	    		res.send(links['approval_url'].href);
	    	} else {
	      		console.error('no redirect URI present');
	    	}
	  	}
	});
});

router.post('/approve_payment', function(req, res, next) {
	let url = req["headers"]["referer"].split("?")[1].split("&");
	var paymentId = url[0].split("=")[1];
	var payerId = { payer_id: url[2].split("=")[1] };
	var authid;

	paypal.payment.execute(paymentId, payerId, function (error, payment) {
  		if (error) {
    		console.error(JSON.stringify(error));
  		} else {
    		if (payment.state === 'approved'
    		&& payment.transactions
    		&& payment.transactions[0].related_resources
    		&& payment.transactions[0].related_resources[0].authorization) {
      		// Capture authorization.
      			authid = payment.transactions[0].related_resources[0].authorization.id;
      			temp["authid"] = authid;
      			console.log(payment);
    		} else {
      			console.log('payment not successful');
    		}
  		}
	});
});

router.post('/capture_payment', function(req, res, next) {
	// Set capture details.
	var capture_details = {
  		amount: {
    		currency: 'USD',
    		total: '10'
  		},
  		is_final_capture: true
	};

	// Capture authorization.
	paypal.authorization.capture(temp["authid"], capture_details, function (error, capture) {
  		if (error) {
    		console.error(JSON.stringify(error));
  		} else {
    		console.log(JSON.stringify(capture));
  		}
	});
})

module.exports = router;
