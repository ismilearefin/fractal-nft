const data = [
    {
        id:1,
        name:'Fractal'
    },
    {
        id:2,
        name:'Fractal'
    },
    {
        id:3,
        name:'Fractal'
    },
    {
        id:4,
        name:'Fractal'
    },
]

export default function Fractal() {
  return (
    <div className="d-flex gap-5 justify-content-evenly border-bottom py-3 py-md-5">
      {
        data.map(item=>(
            <div key={item.id} className="d-none d-md-flex text-white  align-items-center gap-4">
            <svg
        xmlns="http://www.w3.org/2000/svg"
        width="47"
        height="46"
        viewBox="0 0 47 46"
        fill="none"
      >
        <path
          d="M23.3743 0.0930176L46.2812 23L23.3743 45.907L0.467285 23L23.3743 0.0930176Z"
          fill="white"
        />
      </svg>
      <h1>Fractal</h1>
      </div>
        ))
      }
      <div className="text-center text-white d-flex align-items-center justify-content-center gap-4">
            <svg
        xmlns="http://www.w3.org/2000/svg"
        width="47"
        height="46"
        viewBox="0 0 47 46"
        fill="none"
      >
        <path
          d="M23.3743 0.0930176L46.2812 23L23.3743 45.907L0.467285 23L23.3743 0.0930176Z"
          fill="white"
        />
      </svg>
      <h1>Fractal</h1>
      </div>
    </div>
  );
}
