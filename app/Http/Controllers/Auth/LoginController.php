<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Auth;
use Session;
use Hash;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */


    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->middleware('guest')->except('logout');
    }
    public function switchLogin($request, $route, $link)
    {
        if (Auth::check()) {
            return \Support::response(['code'=>200,'message'=>'Bạn đang đăng nhập rồi','redirect'=>'/']);
        }

        if ($request->isMethod('post')) {
            return $this->login($request);
        } else {
            Session::put('_url_intended', url()->previous());
            return view('auth.login', compact('route', 'link'));
        }
    }

    public function login($request)
    {
        $validator = $this->validator($request->all());

        if ($validator->fails()) {
            return \Support::response([
                'code' => 100,
                'message' => $validator->errors()->first(),
            ]);
        }

        $phone = $request->phone;
        $user = $this->checkUser('phone',$phone);
        if(is_array($user)){
            return response($user);
        }

        $credentials = ['phone' => $phone, 'password'=>$request->password];
        if (Auth::attempt($credentials, true)) {
            $user->logLoginAction();
            return $this->authenticated($request);
        }else {
            return response()->json([
                'code' => 100,
                'message' => 'Số điện thoại hoặc mật khẩu không chính xác',
            ]);
        }
        return $this->sendFailedLoginResponse('phone',$request);
    }

    protected function sendFailedLoginResponse($field, $request)
    {
        $message = $this->checkError($field,$request);
        return response()->json([
            'code' => 100,
            'message' => $message,
            'redirect' => url()->previous()
        ]);
    }

    protected function checkError($field,$request)
    {
        $user = \App\Models\User::where($field, $request->username)->where('act', 1)->first();
        if(!Hash::check($user->password, $request->password)){
            return 'Mật khẩu đăng nhập không chính xác';
        }
    }

    protected function checkUser($field, $username){
        $user = User::where($field, $username)->first();
        if($user == null){
            return [
                'code' => 100,
                'message' => 'Tài khoản không tồn tại vui lòng đăng ký'
            ];
        }

        if($user->act == 0){
            return [
                'code' => 100,
                'message' => 'Tài khoản đã bị khóa vui lòng liên hệ với quản trị viên'
            ];
        }
        return $user;
    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'phone' => ['required'],
            'password' => ['required'],
        ], [
            'required' => 'Vui lòng nhập :attribute',
        ], [
            'password' => 'Vui lòng nhập mật khẩu',
            'phone' => 'Vui lòng nhập số điện thoại'
        ]);
    }

    protected function authenticated($request)
    {
        Auth::logoutOtherDevices($request->password);
        return response()->json([
            'code' => 200,
            'message' => 'Đăng nhập thành công',
            'redirect_url' => url()->to('/')
        ]);
    }

    public function logout(Request $request)
    {
        session()->flush();
        Auth::logout();
        return $request->wantsJson()
            ? new JsonResponse([], 204)
            : redirect(route('home'));
    }
}
