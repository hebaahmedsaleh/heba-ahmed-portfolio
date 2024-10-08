import { useState, useEffect } from "react";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Front End Engineer", "React Native Engineer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner px-4 py-2 dark:text-grey-500" id="aboutMe">
      <section className="w-full flex items-center justify-center flex-col">
        <h1 className="text-6xl font-bold dark:text-cyan-500">
          Hi I'm Heba, {text}
          <br />
        </h1>

        <section className="flex p-4 w-1/2 ">
          <p className="flex py-2 pr-4 pl-3 text-gray-700  md:text-primary-700 md:p-0 dark:text-gray text-center">
            I am a Front-end Engineer with a working experience in web and
            mobile development for seven years. I am implementing scalable
            performant pixel-perfect applications and also know user experience
            and web accessibility. I adore creativity and vibrant colors,
            especially enjoying designing beautiful websites and creating
            handmade embroidery and crafts.
          </p>
        </section>
      </section>
    </section>
  );
}

export default Banner;
