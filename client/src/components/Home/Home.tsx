import {useAuth} from "../Auth";
import React from "react";
import {Button} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    return (
        <div className={"flex flex-wrap justify-center items-center"}>
            <div className={"flex flex-col"}>
                <img src={"/vite.svg"} alt={"logo"} style={{width: 350}}/>
            </div>
            <div className={"flex flex-col"}>
                {auth.user === null
                    ? (
                        <React.Fragment>
                            <h1 className={"text-3xl"}>Snoopy</h1>
                            <Button color={"primary"}
                                    variant={"shadow"}
                                    onClick={() => navigate("/login")}
                            >
                                Se connecter
                            </Button>
                        </React.Fragment>
                    )
                    : (
                        <React.Fragment>
                            <h1 className={"text-3xl"}>Bienvenue {auth.user.username}</h1>
                            <Button color={"primary"}
                                    variant={"bordered"}
                                    onClick={() => navigate("/logout")}
                            >
                                Se déconnecter
                            </Button>
                        </React.Fragment>
                    )}
                <Button color={"primary"}
                        variant={"shadow"}
                        onClick={() => navigate("/prestation")}
                >
                    Créer une prestation
                </Button>
                <Button color={"primary"}
                        variant={"shadow"}
                        onClick={() => navigate("/prestation/list")}
                >
                    Prestations effectuées
                </Button>
            </div>
        </div>
    );
}

export default Home;