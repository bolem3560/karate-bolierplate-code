function fn() {
	var urlPath = read("../commonfunctions/endpoints.json");
	var httpHeaders = read("../commonfunctions/headers.json");
	var env = karate.env; // get system property 'karate.env'
	karate.log('karate.env system property was:', env);
	if (!env) {
		env = 'qa';
	}
	var config = {
		env: env,
		_domain: 'https://pttrsb.lm-tst101.com/api',
		_keyCloakdomain: 'https://keycloak.lm-dev101.com',
		_authDomain: 'https://pttrsb.lm-dev101.com/auth',
		_pamAPI: 'https://ptwaks.lm-tst101.com',
		_expAPI: 'https://pttrex.lm-tst101.com',
		_processInstance: 'https://ptwaks.lm-tst101.com',
		_jsonTreaty: {},
		_apiEndpoints: urlPath,
		_httpHeaderParameters: httpHeaders,
		_DBConfig: { username: 'ipos-pam-tst', password: '9^Nk\\,\"a\\6rgr)}F', url: 'jdbc:postgresql://lm-tst101-postgres.cytuubs5djbn.eu-west-2.rds.amazonaws.com:5432/PAM?currentSchema=work-assignment' },
	}


	if (env == 'dev') {
		config._domain = 'https://pttrsb.lm-dev101.com/api';
		config._keyCloakdomain = 'https://keycloak.lm-dev101.com';
		config._authDomain = 'https://pttrsb.lm-dev101.com/auth';
		config._pamAPI = 'https://ptwaks.lm-dev101.com';
		config._expAPI = 'https://pttrex.lm-dev101.com';
		config._processInstance = 'https://ptwaks.lm-tst101.com';
		config._DBConfig = { username: 'ipos-pam-dev', password: '}k8kHn/~89@Wr+yJ', url: 'jdbc:postgresql://lm-dev101-postgres.cytuubs5djbn.eu-west-2.rds.amazonaws.com:5432/PAM?currentSchema=work-assignment' }
	} else if (env == 'qa') {
		config._domain = 'https://pttrsb.lm-tst101.com/api';
		config._keyCloakdomain = 'https://keycloak.lm-dev101.com';
		config._authDomain = 'https://pttrsb.lm-dev101.com/auth';
		config._processInstance = 'https://ptwaks.lm-tst101.com';
		config._expAPI = 'https://pttrex.lm-tst101.com';
		config._pamAPI = 'https://ptwaks.lm-tst101.com';
		config._DBConfig = { username: 'ipos-pam-tst', password: '9^Nk\\,\"a\\6rgr)}F', url: 'jdbc:postgresql://lm-tst101-postgres.cytuubs5djbn.eu-west-2.rds.amazonaws.com:5432/PAM?currentSchema=work-assignment' }
	}
	return config;
}