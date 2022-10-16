import 'package:tictactoe/common/dio/base_http.dart';
import 'package:tictactoe/common/dio/interceptors/auth_interceptor.dart';

final AuthHttp authHttp = AuthHttp();

class AuthHttp extends BaseHttp {
  @override
  void init() {
    interceptors.addAll([AuthorizationInterceptor()]);
  }
}
