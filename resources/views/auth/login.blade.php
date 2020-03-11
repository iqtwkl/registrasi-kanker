@extends('layouts.layouts')

@section("styled")
    <style type="text/css">
        .container-login{
            background-color: #ddd;
            display: -ms-flexbox;
            display: -webkit-box;
            display: flex;
            -ms-flex-align: center;
            -ms-flex-pack: center;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            padding-top: 40px;
            padding-bottom: 40px;
            text-align: center;
            height: 100%;
        }
        .form-sign-in {
            background-color: #fff;
            width: 100%;
            max-width: 330px;
            padding: 30px;
            margin: 0 auto;
            border: 1px solid #ddd;
            border-radius: 5px;
            -webkit-box-shadow: 3px 4px 5px 0px rgba(198, 198, 198, 0.75);
            -moz-box-shadow: 3px 4px 5px 0px rgba(198, 198, 198, 0.75);
            box-shadow: 3px 4px 5px 0px rgba(198, 198, 198, 0.75);
        }

        form input.field{
            border-radius: 0;
            border-width: 0 0 1px;
            border-style: solid;
            border-color: rgba(0,0,0,.12);
            font: 400 15px/18px Roboto,sans-serif;
            box-shadow: inset 0 -1px 0 transparent;
            box-sizing: border-box;
            padding: 12px 4px;
            background: 0 0;
            width: 100%;
            display: block;
        }

        form input.field:focus{
            box-shadow: none;
        }
    </style>
@endsection

@section("content")
<div class="container-login">
    <form class="form-sign-in" method="post" action="{{ route("login.action") }}">
        {{ csrf_field() }}
        <div class="row">
            <div class="col-sm-6 offset-sm-3">
                <img class="img" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg">
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6 offset-sm-3">
                <br />
            </div>
        </div>

        <div class="form-label-group">
            <input type="email" id="email" name="email" class="form-control field" placeholder="Email address" required autofocus>
            <label class="invisible" for="email">Email address</label>
        </div>

        <div class="form-label-group">
            <input type="password" id="password" name="password" class="form-control field" placeholder="Password" required>
            <label class="invisible" for="assword">Password</label>
        </div>

        @if($errors->any())
            <div class="alert alert-danger">{{ $errors->first() }}</div>
        @endif

        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
</div>
@endsection