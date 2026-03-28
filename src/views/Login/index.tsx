"use client";

import { useLoginPageSession } from "@/entities/auth/model/hooks/useLoginPageSession";
import { LoadingCircle } from "@UI/LoadingCircle";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRef } from "react";

import { SubmitBtn } from "./components/LoginButton";
import { LoginInput } from "./components/LoginInput";
import { PasswordInput } from "./components/PasswordInput";
import s from "./style.module.scss";

const Login = () => {
  const { phase, doLogout } = useLoginPageSession();

  const loginRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  if (phase === "loading") {
    return <LoadingCircle fullScreen />;
  }

  if (phase === "authed") {
    return (
      <div className={s.LoginContainer}>
        <div className={s.InputContainer}>
          <h1>Система администрирования контента</h1>
          <p className={s.sessionNote}>
            Вы уже вошли в систему. Можете перейти в панель или выйти, чтобы
            войти под другим пользователем.
          </p>
          <div className={s.BtnGroup}>
            <Button
              type="button"
              variant="contained"
              component={Link}
              href="/CMS"
              className={s.btn}
            >
              В панель
            </Button>
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              className={s.btn}
              onClick={() => {
                void doLogout();
              }}
            >
              Выйти
            </Button>
            <Button
              type="button"
              variant="outlined"
              component={Link}
              href="/"
              className={s.btn}
            >
              На главную
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={s.LoginContainer}>
      <div className={s.InputContainer}>
        <h1>Система администрирования контента</h1>

        <LoginInput ref={loginRef} />

        <PasswordInput ref={passRef} />

        <div className={s.BtnGroup}>
          <SubmitBtn loginRef={loginRef} passRef={passRef} />
          <Link href="/">
            <Button variant="outlined" className={s.btn}>
              На главную
            </Button>
          </Link>
        </div>
        <div id="modal_block"></div>
      </div>
    </div>
  );
};

export default Login;
