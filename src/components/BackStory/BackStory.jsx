import "../BackStory/BackStory.css";
import Fractals2 from "../../../public/Fractals2.svg";
// import largeCircle from "../../../public/largeCircle.svg";

export default function BackStory() {
  return (
    <div className="BackStoryBox border-bottom row overflow-hidden">
      <div className="col border-start border-end p-5">
        <h1>Back Story</h1>
        <div className="textStory">
          <p>
            In this futuristic dystopian world, the characters are designed with
            a unique approach, drawing inspiration from fractals, which are
            infinitely complex patterns created with different scales. Just as
            fractals exhibit self-similarity at various levels, the characters
            in the collection are fractionally complete, each reflecting a small
            part of the larger narrative, yet embodying their own distinctive
            identities within their respective factions.
          </p>
          <p>
            The name Fractal also alludes to the interconnectedness of this
            world, where every character, every detail, and every storyline is
            intricately woven into the broader tapestry of the narrative. Each
            NFT represents a fractal piece of this multifaceted universe,
            offering collectors a glimpse into the infinite possibilities that
            exist within it.
          </p>
          <p>
            As collectors explore the NFTs in the Droids, Bots, Mythical,
            Elemental, and Legendary factions, they will discover how the
            concept of fractals not only influences the visual design but also
            the underlying philosophy of this project. Just as fractals continue
            to reveal new intricacies and beauty with each level of
            magnification, Fractal - Manipulation of the Physical invites its
            audience to uncover the hidden depths and complexities of this
            mesmerizing dystopian future, one character at a time.
          </p>
        </div>
      </div>
      <div className="col text-white border-end text-center">
        <div className="largeCircle position-relative d-flex justify-content-center align-items-center">
        <h1 className="rotateH1">
          <span className="char1">f</span>
          <span className="char2">r</span>
          <span className="char3">a</span>
          <span className="char4">c</span>
          <span className="char5">t</span>
          <span className="char6">a</span>
          <span className="char7">l</span>
          <span className="char8"> </span>
          <span className="char9">b</span>
          <span className="char10">a</span>
          <span className="char11">c</span>
          <span className="char12">k</span>
          <span className="char13"> </span>
          <span className="char14">s</span>
          <span className="char15">t</span>
          <span className="char16">o</span>
          <span className="char17">r</span>
          <span className="char18">y</span>
          {/* <span className="char1"></span> */}
          {/* fractal back story */}
        </h1>
        <div className="smallCircle position-absolute ">
        </div>
        <img src={Fractals2} alt="hero2" className="position-absolute"></img>
        </div>
      </div>
    </div>
  )
  }