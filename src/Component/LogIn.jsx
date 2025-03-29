import React from "react";

export default function LogIn() {
    return (
        <div className="top-content">
        	
            <div className="inner-bg">
                <div className="container">
                	
                    
                    <div className="row">
                        
                        <div className="col-sm-5 bg-light p-0 rounded border border-secondary">
                        	
                        	<div className="form-box">
	                        	<div className="form-top">
	                        		<div className="form-top-left ms-3">
	                        			<h3>Login to our site</h3>
	                            		<p>Enter username and password to log on:</p>
	                        		</div>
	                        		
	                            </div>
	                            <div className="form-bottom bg-dark-subtle pr-0">
				                    <form role="form" action="" method="post" className="login-form">
				                    	<div className="m-3 pt-3">
				                        	<input type="text" name="form-username" placeholder="Username..." className="form-username form-control" id="form-username"/>
				                        </div>
				                        <div className="m-3">
				                        	<input type="password" name="form-password" placeholder="Password..." className="form-password form-control" id="form-password"/>
				                        </div>
                                        <div className="text-center">
				                            <button type="submit" className="btn btn-dark">Log In!</button>
                                        </div>
				                    </form>
			                    </div>
		                    </div>
	                        
                        </div>
                        
                        <div className="col-sm-1 middle-border"></div>
                        <div className="col-sm-1 middle-border"></div>
                                
                            <div className="col-sm-5 bg-light p-0 rounded border border-secondary">
                           
                                <div className="form-box">
                                    <div className="form-top">
                                        <div className="form-top-left ms-3">
                                            <h3>Sign up now</h3>
                                            <p>Fill in the form below to get instant access:</p>
                                        </div>
                                    </div>
                                    <div className="form-bottom bg-dark-subtle pr-0">
                                        <form role="form" action="" method="post" className="registration-form">
                                            <div className="m-3 pt-3">
                                                <input type="text" name="form-first-name" placeholder="First name..." className="form-first-name form-control" id="form-first-name"/>
                                            </div>
                                            <div className="m-3 pt-3">
                                                <input type="text" name="form-last-name" placeholder="Last name..." className="form-last-name form-control" id="form-last-name"/>
                                            </div>
                                            <div className="m-3 pt-3">
                                                <input type="email" name="form-email" placeholder="Email..." className="form-email form-control" id="form-email"/>
                                            </div>
                                            <div className="m-3 pt-3">
                                                <input type="password" name="form-email" placeholder="Password..." className="form-email form-control" id="form-email"/>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-dark">Sign me up!</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                
                            </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}