<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Portfolio">
    <meta name="author" content="Mike Kidushim">
    <title>Michael Kidushim Portfolio Contact</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <!-- Custom Fonts -->
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <link rel="stylesheet" type="text/css" href="stylish-portfolio.css">
</head>

<body>
<?php include 'header.php';?>
    <aside id="contact" class="call-to-action bg-primary">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h3>Contact Information</h3>
                    <form method="POST">
                       <!--  <label class="col-xs-4 col-md-2 col-md-offset-3">Name:</label> -->
                        <input class="col-xs-7 col-md-4" type="text" placeholder="name" name="name" required>
                        <!-- <label class="col-xs-4 col-md-2 col-md-offset-3">E-mail:</label> -->
                        <input class="col-xs-7 col-md-12" type="email" placeholder="email" name="email" required>
                        <!-- <label class="col-xs-4 col-md-2 col-md-offset-3">Phone:</label> -->
                        <input class="col-xs-7 col-md-12" type="phone" placeholder="phone number" name="phone" required>
                        <!-- <label class="col-xs-4 col-md-2 col-md-offset-3">Message:</label> -->
                        <textarea class="col-xs-7 col-md-12" cols="20" rows="3" placeholder="Message" name="message" required></textarea>
                        <button class="send col-xs-4 col-xs-offset-7 col-md-2 col-md-offset-7">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </aside>
</body>
</html>