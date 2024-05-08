<html>
<head>
<style>
<form action="action_page.php">
<div class="container">
<h1>REGISTER</h1>
<p>Please fill up this form to available to create an account.</p>
<hr>
body{font-family:Arial,Helvetica,sans-serif;
}
h2{text-align:center;
}
*{
	box-sizing: border-box;
}
form{
	padding: 16px;
	max-width: 800px;
	margin-left: 20%;
	background-color: rgba(195, 247, 255, 0.966);
}
input[type=password]{
	width: 100%;
	padding: 15px;
	margin: 5px 0 22px 0;
	display: inline-block;
	border: none;
	background: #ffffff;
}
input[type=text]:focus, input[type=password]:focus {
         background-color: #ffffff;
         outline: none;
      }
      hr {
         border: 1px solid #f1f1f1;
         margin-bottom: 25px;
      }
      .registerbtn {
         background-color: #A4CBDE;
         color: white;
         padding: 16px 20px;
         margin: 8px 0;
         border: none;
         cursor: pointer;
         width: 100%;
         opacity: 0.9;
      }
      .registerbtn:hover {
         opacity: 1;
      }
      a {
         color: dodgerblue;
         text-decoration: none;
      }
      .signin {
         background-color: #F7BCD5;
         text-align: center;
      }
      @media (max-width: 800px) {
         form {
            width: 100%;
            margin-left: 0px;
         }
      }
   </style>
</head>
<body>
   <h1>Registration Form Example</h1>
   <form>
      <label for="name"><b>Name</b></label>
      <input type="text" placeholder="Enter Name" name="name" required>
      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required>
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
      <hr>
      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
      <button type="submit" class="registerbtn">Register</button>
      <div class="signin">
         <p>Already have an account? <a href="#">Sign in</a>.</p>
      </div>
   </form>
</body>
</html>



