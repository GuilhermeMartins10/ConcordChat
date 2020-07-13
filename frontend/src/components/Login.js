import React from 'react';

export default function Login() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3" />
                <div className="col-6">
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title">Entrar</h5>
                            <form>
                                <label className="card-title">
                                    E-mail:
                                    <input type="text" />
                                </label>
                                <label className="card-title">
                                    Senha:
                                    <input type="password" />
                                </label>
                            </form>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
                <div className="col-3" />
            </div>
        </div>
    );
}
