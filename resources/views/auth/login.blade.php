@extends('layouts.layouts')

@section("styled")
    <style type="text/css">
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