import "../BackStory/BackStory.css";
import Fractals2 from "/Fractals2.svg";
import Group5 from "/Group5.svg";

export default function BackStory() {
  return (
    <div className="BackStoryBox border-bottom  d-flex flex-column-reverse flex-md-row overflow-hidden mt-5 mt-sm-0">
        {/* Text Section */}
      <div className="col border-start border-end p-2 p-md-5 ">
        <h1 className="mt-5">Back Story</h1>
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

      {/* Image Section */}
      <div className="col text-white border-end ">
       <div className="position-relative">
      <img src={Group5} alt="Group" className="groupImg"></img>
       <img src={Fractals2} alt="hero2" className="position-absolute BcakStoryheroImg"></img>
       </div>
      </div>
    </div>
  )
  }