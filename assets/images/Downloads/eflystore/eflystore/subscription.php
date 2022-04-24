<?php
	if(isset($_POST["subscribe_email"])){
		$to = $_POST["subscribe_email"];
		$subject = 'Eflystore Subscription for '.$to;
		// Always set content-type when sending HTML email
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

		// More headers
		$headers .= 'From: <vishufadtare@gmail.com>' . "\r\n";
		//$headers .= 'Cc: myboss@example.com' . "\r\n";
		
		$message = '
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">

    <!-- font family link -->
    <link href="https://fonts.googleapis.com/css2?family=Play&display=swap" rel="stylesheet">

    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <title>Colors that impact emotions!</title>
    <style type="text/css">
        @import url(//db.onlinewebfonts.com/c/105007d99d9df64c50cc24d696d79555?family=Graphik+Web+Regular);
    </style>


    <!--[if mso]>
  <style type="text/css">
    table {border-collapse:collapse;border-spacing:0;margin:0;}
    div, td {padding:0;}
    div {margin:0 !important;}
  </style>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
    <style type="text/css">
        html {
            width: 100%;
            height: 100vh;
            font-size: 62.5%;

        }

        body {
            min-width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            font-family: Play, sans-serif;


        }

        .heading1 {
            letter-spacing: 2px;
        }

        a {
            color: white;
            text-decoration: none;
        }


        /*footer*/

        @media screen and (min-device-width: 769px) {

            .three-col {
                width: 96%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: flex-start
            }


        }


        /* icon for mobile view */
        @media screen and (max-device-width: 768px) {
            .socialmedia {
                display: flex !important;
                flex-direction: row !important;
                justify-content: flex-end !important;


            }

            .two-col {

                display: flex !important;
                flex-direction: row !important;
                flex-wrap: nowrap !important;
                justify-content: space-between !important;
                max-width: 100% !important;
            
            }

            .mx-width {
                max-width: 100% !important;
				float: right !important;
				margin-top: -11px;
            }

            .left-padd-mob{
                padding-left: 30px !important;
            }


        }

        @media screen and (max-device-width: 768px) {
            .icon-size {

                width: 22px;
                height: auto;

            }


        }


        /* hover for icon */
        .hover-icon:hover {
            opacity: 0.6;
        }

        
    </style>
</head>

<body style="margin:0;padding:0;word-spacing:normal;background-color:#ffffff;">
    <div role="article" aria-roledescription="email" lang="en"
        style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#ffffff;">
        <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
                <td align="center">
                    <!--[if mso]>
                       <table role="presentation" align="center" style="width:660px;">
                            <tr>
                      <td style="padding:20px 0;">
                             <![endif]-->
                    <div class="outer full_width" style="width:96%;max-width:660px;margin:20px auto;">

                        <table role="presentation" width="100%" style="margin: 0px;">
                            <tr>
                                <td class="logo"
                                    style="padding:0px;font-family: Play, sans-serif; font-weight:bold;line-height:1px;">
                                    <a href="https://www.eflystoreindia.com">
                                        <img src="http://weagastyle.com/eflystore/images/header_logo.png" alt="" style="width: 90px;">

                                    </a>
                                </td>
                            </tr>
                        </table>


                        <table role="presentation" width="100%" bgcolor="#ffffff">
                            <tr>
                             <td style="padding:5px;text-align:left;">
                                         
                             </td>
                           </tr>
                         </table>                         
                                                 
                         <table role="presentation" width="100%" style="display: contents;">
                           <tr>
                             <td style="padding:0px 10px 0px 10px;font-family:Play, sans-serif; font-size:24px;line-height:1px;font-weight:bold;">
                               <img src="http://weagastyle.com/eflystore/images/blog_bannner_mail.png" width="640" alt="" style="width:100%;height:auto;" />
                             </td>
                           </tr>
                         </table>			
                     
                         <table role="presentation" width="100%" bgcolor="#ffffff">
                            <tbody><tr>
                             <td style="padding:5px;text-align:left;">
                                         
                             </td>
                           </tr>
                         </tbody></table>
						 
						 
                         <table role="presentation" width="100%">
                            <tr>
                             <td style="padding:10px 10px 5px 10px;text-align:left;">                  
                               <p style="color:#797979; font-family:Play, sans-serif; margin:0; font-size:14px;line-height:20px;">Thanks for subscribing our newsletter.</p>
                             </td>
                           </tr>
                          
                             <tr>
                             <td style="padding:5px 10px 5px 10px;text-align:left;">                  
                               <p style="color:#797979; font-family:Play, sans-serif; margin:0; font-size:14px;line-height:20px;">You will recieve updates on your email address or you will visit Blogs page <br/> for previous and recents post</p>
                             </td>
                           </tr>		
                         <tr>
                             <td style="padding:5px 10px 5px 10px;text-align:left;">                  
                               <p style="color:#797979; font-family:Play, sans-serif; margin:0; font-size:14px;line-height:20px;">Team<br/>eFly store India Private Limited </p>
                             </td>
                           </tr>	
                        
                         <tr>
                             <td style="padding:5px 10px 5px 10px;text-align:left;">                  
                               <p style="color:#797979; font-family:Play, sans-serif; margin:0; font-size:14px;line-height:20px;">For more information visit : <a style="color:blue;" href="https://www.eflystoreindia.com" >https://www.eflystoreindia.com</a></p>
                             </td>
                           </tr>				  
                         </table>
						 
						<table role="presentation" width="100%" bgcolor="#ffffff">
                            <tbody><tr>
                             <td style="padding:5px;text-align:left;">
                                         
                             </td>
                           </tr>
                         </tbody></table>
                              
                          <!--FOOTER Start-->         
							

                        <table class="footer" style="margin: 0px;padding: 0px;background-color: #2d3135; width: 100%;">
                            <tr class="footer-top" style=" max-width: 100%;">
                                <td class="three-col"   style="padding: 5px; ">
                                    <div class="two-col">

                                        <table class="column mobile-width"
                                            style="    max-width: 400px;display: inline-block;vertical-align: top;margin-right: 20px;">

                                            <tr>
                                                <td>
                                                    <p
                                                        style="color: white;   
                                                  margin-top: 0;color: #fff;font-size: 12px; letter-spacing: 1px;   font-weight: bold; text-align: left;">
                                                        About us</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p
                                                        style="color: white; font-family: Play, sans-serif;font-size: 11px;color: #d6caca;  margin: 0;text-align: justify; line-height: 16px;">eFlyStore India Pvt. Ltd. , eFly represents a strong start. When you decide to start a new tale of progress and embark on a trip to new heights, and you&lsquo;ll need a partner to help you along the way. That partner is who eFly is! </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td
                                                    style="display: flex;flex-direction: row;flex-wrap: nowrap;align-items: center; justify-content: flex-start;">

                                                    <img src="http://weagastyle.com/emailTemplates/images1/footer/mail_white_img.png" alt="" width="17" height="19px"
                                                        class="hover-icon" style=" margin-right: 7px;">
                                                    <p
                                                        style="color: white; font-family: Play, sans-serif;font-size: 11px;margin: 0;text-align: justify; line-height: 16px;">
                                                        support@eflystoreindia.com</p>

                                                </td>
                                            </tr>
                                        </table>

                                        <!-- list items -->

                                        <table class=" column left-padd-mob"
                                            style="max-width: 120px; display: inline-block;vertical-align: top;margin-right: 10px;">
                                            <tr>
                                                <td>
                                                    <p
                                                        style="color: white; margin-top: 0;color: #fff;font-size: 12px; letter-spacing: 1px;   font-weight: bold; text-align: left;">
                                                        Legal</p>

                                                </td>
                                            </tr>
                                            <tr style="    display: flex;  flex-direction: column; flex-wrap: nowrap;">


                                                <td>

                                                    <a href="#">
                                                        <p
                                                            style="color: white;     padding-bottom: 7px; font-family: Play, sans-serif;font-size: 11px;color: #d6caca;  margin: 0;text-align: justify; line-height: 16px;">
                                                            Privacy Policy</p>
                                                    </a>

                                                    <a href="#">
                                                        <p
                                                            style="color: white;     padding-bottom: 7px; font-family: Play, sans-serif;font-size: 11px;color: #d6caca;  margin: 0;text-align: justify; line-height: 16px;">
                                                            Terms and Conditions</p>
                                                    </a>

                                                    <a href="#">
                                                        <p
                                                            style="color: white;     padding-bottom: 7px; font-family: Play, sans-serif;font-size: 11px;color: #d6caca;  margin: 0;text-align: justify; line-height: 16px;">
                                                            Unsubscribe</p>
                                                    </a>

                                                    <a href="#">
                                                        <p
                                                            style="color: white;     padding-bottom: 7px; font-family: Play, sans-serif;font-size: 11px;color: #d6caca;  margin: 0;text-align: justify; line-height: 16px;">
                                                            Disclaimer</p>
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>

                                    </div>

                                    <!-- social icons -->

                                    <div class="mx-width">
                                        <table class="column " style="max-width: 40px;">
                                            <tr>
                                                <td class="socialmedia ">


                                                    <div class="imgpop" style="padding: 5px">
                                                        <a target="_blank" href="https://www.facebook.com/Gkaafashion">
                                                            <img class="hover-icon icon-size "
                                                                src="http://weagastyle.com/emailTemplates/images1/footer/fb.png" alt="" border="0"
                                                                width="30" height="auto"
                                                                style="display:block; border:none; outline:none; text-decoration:none;">
                                                        </a>
                                                    </div>

                                                    <div class="imgpop" style="padding: 5px">
                                                        <a target="_blank"
                                                            href="https://www.instagram.com/gkaa_fashion/">
                                                            <img class="hover-icon icon-size "
                                                                src="http://weagastyle.com/emailTemplates/images1/footer/insta.png" alt="" border="0"
                                                                width="30" height="auto"
                                                                style="display:block; border:none; outline:none; text-decoration:none;">
                                                        </a>
                                                    </div>

                                                    <div class="imgpop" style="padding: 5px">
                                                        <a target="_blank"
                                                            href="https://www.youtube.com/channel/UC7ZaTVfHoxuziecMqLfZygg">
                                                            <img class="hover-icon icon-size "
                                                                src="http://weagastyle.com/emailTemplates/images1/footer/utubeshorts.png" alt=""
                                                                border="0" width="30" height="auto"
                                                                style="display:block; border:none; outline:none; text-decoration:none;">
                                                        </a>
                                                    </div>


                                                </td>
                                            </tr>
                                        </table>
                                    </div>





                                </td>

                            </tr>

                        </table>

                        <table role="presentation" width="100%" bgcolor="#000000">
                            <tr>
                                <td style="padding:5px 10px 2px 10px;text-align:center;">

                                    <p style="margin:0;color:#ccc; font-size:10px;line-height:24px;">
                                        Copyright © 2018-2021 eFlyStore India Pvt Ltd, All right reserved</p>

                                </td>
                            </tr>
                        </table>




                        <!-- footer end -->

                    </div>


                </td>

            </tr>

        </table>






    </div>


</body>

</html>


';


$status = mail($to, $subject, $message, $headers);

if($status == 1){
	echo "Thank you. Your subscription done successfully";
}
 	}
?>
