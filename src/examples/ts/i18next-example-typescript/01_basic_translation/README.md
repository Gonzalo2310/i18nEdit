# 01 Basic Translation

In this sample we are going to:

- Install the i18next needed packages.
- Setup a basic configuration.
- Translate markup text.
- Translate text injected in javascript.
- Use interpolation.
- Add multilanguage support to form validations.

# Steps

- Let's start by installing the _react-i18next_ library.

```
npm install react-i18next i18next --save
```

- Create a new file _i18n.js_ containing the following content.

_./src/i18n.ts_

```typescript
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      login: "Login",
      "Invalid login or password, please type again":
        "Invalid login or password, please type again",
      "error, review the fields": "error, review the fields"
    }
  },
  es: {
    translation: {
      login: "Introduzca credenciales",
      "Invalid login or password, please type again":
        "Usuario o clave no validos, porfavor intentelo de nuevo",
      "error, review the fields": "Error, revise los campos por favor"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
```

The interesting part here is by i18n.use(initReactI18next) we pass the i18n instance to react-i18next which will make it available for all the components via the context api.

Now let's import this fail in our _main.tsx_

_./src/main.tsx_

```diff
import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
+ import './i18n';
```

- Let's start translating the heading of the login panel, to do that
  we will make use of a _hook_ that i18n provides.

_./src/pages/login/loginPage.tsx_

```diff
// (...)
+ import { useTranslation } from 'react-i18next';

// (...)

const LoginPageInner = (props: Props) => {
+  const { t, i18n } = useTranslation();
  const { loginInfo, setLoginInfo } = useLogin();

// (...)

  return (
    <>
      <Card className={classes.card}>
-        <CardHeader title="Login" />
+        <CardHeader title={t('login')} />

        <CardContent>
          <LoginForm
            onLogin={onLogin}
            onUpdateField={onUpdateLoginField}
            loginInfo={loginInfo}
            loginFormErrors={loginFormErrors}
          />
        </CardContent>
      </Card>
      <NotificationComponent
-        message="Invalid login or password, please type again"
+        message={t('Invalid login or password, please type again')}
        show={showLoginFailedMessage}
        onClose={() => setShowLoginFailedMessage(false)}
      />
    </>
  );
};
```

> If you are using class based components react i18next exposes an HOC for you to
> get access to _t_.

- So far so good, let's check now how can we add multilanguage support to a literal that
  is injected via javascript.

_./src/pages/login/loginPage.tsx_

```diff
  const onLogin = () => {
    loginFormValidation.validateForm(loginInfo).then(formValidationResult => {
      if (formValidationResult.succeeded) {
        if (isValidLogin(loginInfo)) {
          loginContext.updateLogin(loginInfo.login);
          props.history.push("/pageB");
        } else {
          setShowLoginFailedMessage(true);
        }
      } else {
-        alert("error, review the fields");
+         alert(t("error, review the fields");
      }
    });
  };
```

That was nice, let's give a try now to interpolation, in pageB we are showing a message
like:

```
<h3>Login: {props.login}</h3>
```

We don't need to concatenate translated strings, we can directly include the variables
in the string.

- Let's define the entry in the our root _i18next.ts_ file.

_./src/i18n.ts_

```diff
const resources = {
  en: {
    translation: {
      login: "Login",
      "Invalid login or password, please type again":
        "Invalid login or password, please type again",
      "error, review the fields": "error, review the fields rrr",
+           "login plus username": "Usuario: {{username}}"

    }
  },
  es: {
    translation: {
      login: "Introduzca credenciales",
      "Invalid login or password, please type again":
        "Usuario o clave no validos, porfavor intentelo de nuevo",
      "error, review the fields": "Error, revise los campos por favor",
+     "login plus username": "Usuario: {username}",
    }
  }
};
```

> To reach this page you have to enter as valid username and password keys _admin_ and _test_

- Let's use this on the _pageB_

_./src/pages/b/pageB.tsx_

```diff
import * as React from "react"
import { Link } from 'react-router-dom';
import { SessionContext, withSessionContext } from '../../common/'
+ import { useTranslation } from 'react-i18next';


interface Props {
  login : string;
}

- const PageBInner = (props : Props) =>
+ const PageBInner = (props : Props) => {
+   const { t, i18n } = useTranslation();
+   return (
    <>
      <h2>Hello from page B</h2>
      <br />
      <br />
-      <h3>Login: {props.login}</h3>
+      <h3>t({login plus username}, {username: props.login})</h3>
    <Link to="/">Navigate to Login</Link>
   </>
+ )
+ }

export const PageB = withSessionContext(PageBInner);
```

- To wrap up this example let's translate the inline validation that appear below each
  input field.

- In the _loginForm_ on each textFieldForm we are informing a friendly error message, instead
  of using that, let's use the type of the validation error.

_./src/pages/login/loginForm.tsx_

```diff
      <TextFieldForm
        label="Name"
        name="login"
        value={loginInfo.login}
        onChange={onUpdateField}
-        error={loginFormErrors.login.errorMessage}
+        loginFormErrors.login.succeeded ? "" : loginFormErrors.login.type
      />
      <TextFieldForm
        label="Password"
        name="password"
        value={loginInfo.password}
        onChange={onUpdateField}
-        error={loginFormErrors.password.errorMessage}
+        error={loginFormErrors.password.succeeded ? "" : loginFormErrors.password.type}
      />
```

- Now if we run the application we will see just the type of the error being shown
  (not very friendly).

```bash
npm start
```

- Let's add translation keys for that validation errors.

_./src/i18n.ts_

```diff
const resources = {
  en: {
    translation: {
      login: "Login",
      "Invalid login or password, please type again":
        "Invalid login or password, please type again",
      "error, review the fields": "error, review the fields rrr",
      "login plus username": "Usuario: {{username}}",
+      "REQUIRED": "Mandatory field",
    }
  },
  es: {
    translation: {
      login: "Introduzca credenciales",
      "Invalid login or password, please type again":
        "Usuario o clave no validos, porfavor intentelo de nuevo",
      "error, review the fields": "Error, revise los campos por favor",
      "login plus username": "Usuario: {{username}}"
+      "REQUIRED": "Campo obligatorio",
    }
  }
};
```

- Let's add i18n translator helper to _loginForm_, and properly translate the text.

_./src/pages/login/loginForm.tsx_

```diff
+ import { useTranslation } from "react-i18next";

export const LoginForm = (props: Props) => {
+  const { t, i18n } = useTranslation();
  const { onLogin, onUpdateField, loginInfo, loginFormErrors } = props;

// (...)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <TextFieldForm
        label="Name"
        name="login"
        value={loginInfo.login}
        onChange={onUpdateField}
        error={
-          loginFormErrors.login.succeeded ? "" : loginFormErrors.login.type
+          loginFormErrors.login.succeeded ? "" : t(loginFormErrors.login.type)

        }
      />
      <TextFieldForm
        label="Password"
        name="password"
        value={loginInfo.password}
        onChange={onUpdateField}
        error={
          loginFormErrors.password.succeeded
            ? ""
-            : loginFormErrors.password.type
+            : t(loginFormErrors.password.type)
        }
      />
```

> Excercise: Could you add multilanguage support to the login button?
