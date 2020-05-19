import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { SocialMediaIconsReact } from "social-media-icons-react";

const Example = (props) => {
  return (
    <div>
      &nbsp;
      <Jumbotron>
        <h1 className="display-3">Apreciere</h1>
        <p className="lead">
          Tot ce am făcut eu a fost să automatizez cunoștințele obținute din
          cartea <em>Mănâncă și învinge boala, William W. Li</em>. Meritele se
          duc în întregime către autorul acestei cărți pe care o recomand
          tuturor celor care vor să devină mai sănătoși.
        </p>
        <hr className="my-2" />
        <p>
          <b>Atenție!</b> Nu am niciun studiu în vreun domeniu medical și nici
          nu presupun că aceasta este o dietă <em>minune</em>. Interesați-vă cu
          seriozitate înainte de a vă schimba stilul de viață! <br />
          Dacă aveți feedback și doriți să mă contactați, lăsați-mi un e-mail la
          adresa <b>radu.stochitoiu@gmail.com</b> sau un mesaj pe rețelele de
          socializare.
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="3"
            borderStyle="solid"
            icon="facebook"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="rgba(34,200,237,1)"
            iconSize="5"
            roundness="26%"
            url="https://www.facebook.com/radu.stochitoiu"
            size="40"
          />{" "}
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="4"
            borderStyle="solid"
            icon="instagram"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="rgba(237,34,98,0.93)"
            iconSize="3"
            roundness="26%"
            url="https://instagram.com/radusqrt"
            size="40"
          />
        </p>

        <p className="lead">
          <Button
            color="primary"
            onClick={() => {
              const url =
                "https://www.goodreads.com/book/show/40697523-eat-to-beat-disease?from_search=true&from_srp=true&qid=KpGkbdzeyG&rank=1";
              window.open(url, "_blank");
            }}
          >
            Vezi cartea pe Goodreads
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Example;
