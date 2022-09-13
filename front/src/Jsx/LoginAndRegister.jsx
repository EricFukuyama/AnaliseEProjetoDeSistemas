import "../css/loginandregister.css";
import React, { useState } from "react";
import { Input } from "semantic-ui-react";
import { Button } from "./Button";

export const LoginAndRegister = () => {
  const [create, setCreate] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="lr-card">
      <div id="internal">
        <div id="options">
          <div
            className="link"
            onClick={() => {
              setCreate(false);
            }}
          >
            Login
          </div>
          <div
            className="link"
            onClick={() => {
              setCreate(true);
            }}
          >
            Criar Conta
          </div>
        </div>
        <div id="content">
          {!create ? (
            <div id="login">
              <div>
                email
                <Input
                  id="input"
                  onChange={(e, { value }) => {
                    setEmail(value);
                  }}
                />
              </div>

              <div>
                senha
                <Input
                  id="input"
                  type="password"
                  onChange={(e, { value }) => {
                    setPassword(value);
                  }}
                />
              </div>
            </div>
          ) : (
            <div id="create">
              <div>
                email
                <Input id="input"></Input>
              </div>

              <div>
                senha
                <Input id="input" type="password"></Input>
              </div>
              <div>
                confirmar a senha
                <Input id="input" type="password"></Input>
              </div>
            </div>
          )}
          <div id="bts">
            {!create ? (
              <div>
                <Button
                  buttonStyle={"btn--primary--outline"}
                  onClick={() => {
                    if ((email == "teste" && password == "teste")) {
                      window.location.pathname = "/home";
                    }
                  }}
                >
                  Logar
                </Button>
              </div>
            ) : (
              <div>
                <Button
                  buttonStyle={"btn--primary--outline"}
                  onClick={() => {}}
                >
                  Criar
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
