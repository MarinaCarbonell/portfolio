import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/StaticLanding.scss";
import { useMediaQuery } from "react-responsive";

function StaticLanding(props) {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-device-width: 768px)",
  });
  return (
    <div className="wrapper">
      <div className="landing-wrapper">
        {isDesktop && (
          <>
            <div className="text">
              <p className="static">
                ¡Hola! Soy Marina y hasta ahora he trabajado en{" "}
                <em>Marketing Digital.</em>
              </p>
              <p className="static">
                Como el mundo web y de la programación siempre me ha encantado
              </p>
              <p className="static">
                decidí formarme como <em>Programadora Front-End</em> en{" "}
                <a href="https://adalab.es/">Adalab</a>,
              </p>
              <p className="static">
                donde realicé los siguientes{" "}
                <Link to="/proyects">
                  <span className="underline">Proyectos</span>.
                </Link>
              </p>
              <p className="static">
                Soy <em>aprendiz</em> incansable, cotilla del{" "}
                <em>código ajeno</em> y <em>lectora</em> de todo lo
              </p>
              <p className="static">que cae en mis manos.</p>
              <p className="static">
                Si quieres saber más sobre mí, no dudes en visitar mi{" "}
                <Link to="/curriculum">
                  <span className="underline">Currículum</span>.
                </Link>
              </p>
              <p className="static">
                Para ponerte en contacto conmigo, puedes hacerlo a través del
              </p>
              <p className="static">
                formulario que encontrarás haciendo click{" "}
                <Link to="/contact">
                  <span className="underline">aquí</span>.
                </Link>
              </p>
              <p>
                <i className="far fa-smile"></i>
              </p>
            </div>
          </>
        )}
        {isTablet && !isDesktop && (
          <>
            <div className="text">
              <p className="static">¡Hola! Soy Marina</p>
              <p className="static">y hasta ahora he trabajado en</p>
              <p className="static">
                <em>Marketing Digital.</em>
              </p>
              <p className="static">Como el mundo web y de la programación</p>
              <p className="static">siempre me ha encantado</p>
              <p className="static">decidí formarme como</p>
              <p className="static">
                <em>Programadora Front-End</em> en{" "}
                <a href="https://adalab.es/">Adalab</a>,
              </p>
              <p className="static">
                donde realicé los siguientes{" "}
                <Link to="/proyects">
                  <span className="underline">Proyectos</span>.
                </Link>
              </p>
              <p className="static">
                Soy <em>aprendiz</em> incansable, cotilla del{" "}
              </p>
              <p className="static">
                <em>código ajeno</em> y <em>lectora</em>
              </p>
              <p className="static">de todo lo que cae en mis manos.</p>
              <p className="static">Si quieres saber más sobre mí,</p>
              <p className="static">
                no dudes en visitar mi{" "}
                <Link to="/curriculum">
                  <span className="underline">Currículum</span>.
                </Link>
              </p>
              <p className="static">Para ponerte en contacto conmigo,</p>
              <p className="static">puedes hacerlo a través del</p>
              <p className="static">formulario que encontrarás </p>
              <p className="static">
                haciendo click{" "}
                <Link to="/contact">
                  <span className="underline">aquí</span>.
                </Link>
              </p>
              <p>
                <i className="far fa-smile"></i>
              </p>
            </div>
          </>
        )}
        {!isTablet && !isDesktop && (
          <>
            <div className="text">
              <p className="static">¡Hola! Soy Marina</p>
              <p className="static">y he trabajado en</p>
              <p className="static">
                <em>Marketing Digital.</em>
              </p>
              <p className="static">Como el mundo web</p>
              <p className="static">y de la programación</p>
              <p className="static">siempre me ha encantado</p>
              <p className="static">decidí formarme como</p>
              <p className="static">
                <em>Programadora Front-End</em>
              </p>
              <p className="static">
                en <a href="https://adalab.es/">Adalab</a>,
              </p>
              <p className="static">donde realicé los</p>
              <p className="static">
                siguientes{" "}
                <Link to="/proyects">
                  <span className="underline">Proyectos</span>.
                </Link>
              </p>
              <p className="static">
                Soy <em>aprendiz</em> incansable,
              </p>
              <p className="static">
                cotilla del <em>código ajeno</em>{" "}
              </p>
              <p className="static">
                y <em>lectora</em> de todo
              </p>
              <p className="static">lo que cae en mis manos.</p>
              <p className="static">Si quieres saber más,</p>
              <p className="static">
                visita mi{" "}
                <Link to="/curriculum">
                  <span className="underline">Currículum</span>.
                </Link>
              </p>
              <p className="static">Para ponerte en contacto</p>
              <p className="static">conmigo, hazlo a través</p>
              <p className="static">del formulario </p>
              <p className="static">
                haciendo click{" "}
                <Link to="/contact">
                  <span className="underline">aquí</span>.
                </Link>
              </p>
              <p>
                <i className="far fa-smile"></i>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default StaticLanding;
