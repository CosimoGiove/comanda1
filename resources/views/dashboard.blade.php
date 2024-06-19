@extends('layouts.admin')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 mt-4">
                <div class="card">
                    <div class="card-header">{{ __('Dashboard') }}</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif

                        {{ __('You are logged in!') }}
                        <a href="{{ route('seats.index') }}">Crea nuovo tavolo</a>
                    </div>
                </div>
            </div>
        </div>
        <a href="{{route("orders.by_table")}}">vai</a>
    </div>
@endsection
