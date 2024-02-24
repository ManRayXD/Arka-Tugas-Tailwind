function Contek() {
    return (
      <>
      1. font family
      <div className="w-full">
        <p className="font-sans">The quick brown fox</p>
        <p className="font-serif">The quick brown fox</p>
        <p className="font-mono">The quick brown fox</p>
      </div>
      <br />
      2. hover
      <p className="font-sans hover:font-serif">Arahkan cursor ke saya</p>
      <br />
      3. Font size
        <p className="text-sm"> Text Small</p>
        <p className="text-base"> Text Base</p>
        <p className="text-lg"> Text Large</p>
        <p className="text-xl"> Text XL</p>
        <p className="text-2xl"> Text XXL</p>
        <p className="text-[100px]">Custom 100px</p>
        <br />
        4. Italic
        <p className="italic">The quick brown fox</p>
        <p className="not-italic">The quick brown fox</p>
        <br />
        5. Font Weight
        <p className="font-light">The quick brown fox</p>
        <p className="font-normal">The quick brown fox</p>
        <p className="font-medium">The quick brown fox</p>
        <p className="font-semibold">The quick brown fox</p>
        <p className="font-bold">The quick brown fox</p>
        <br />
        6. Letter Spacing
        <p className="tracking-tigher">The quick brown fox</p>
        <p className="tracking-normal">The quick brown fox</p>
        <p className="tracking-widest">The quick brown fox</p>
        <br />
        7. Line Height
        <p className="leading-normal">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe perspiciatis
          obcaecati molestias quos alias odio nostrum distinctio ab architecto adipisci incidunt
          aperiam recusandae labore fugiat, quod rem illum odit! Eveniet.
        </p>
        <hr />
        <p className="leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe perspiciatis
          obcaecati molestias quos alias odio nostrum distinctio ab architecto adipisci incidunt
          aperiam recusandae labore fugiat, quod rem illum odit! Eveniet.
        </p>
        <hr />
        <p className="leading-loose">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe perspiciatis
          obcaecati molestias quos alias odio nostrum distinctio ab architecto adipisci incidunt
          aperiam recusandae labore fugiat, quod rem illum odit! Eveniet.
        </p>
        <hr />
        <br />
        8. Text Align 
        <p className="text-right">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe perspiciatis
          obcaecati molestias quos alias odio nostrum
        </p>
        <hr />
        <p className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe perspiciatis
          obcaecati molestias quos alias odio nostrum
        </p>
        <hr />
        <p className="text-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe perspiciatis
          obcaecati molestias quos alias odio nostrum
        </p>
        <hr />
        <p className="text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe perspiciatis
          obcaecati molestias quos alias odio nostrum
        </p>
        <hr />
        <br />
        9.Text Color
        <p className="text-sky-300">The quick brown fox</p>
        <p className="text-sky-400">The quick brown fox</p>
        <p className="text-sky-500">The quick brown fox</p>
        <p className="text-sky-600">The quick brown fox</p>
        <p className="text-sky-700">The quick brown fox</p>
        <p className="text-sky-800">The quick brown fox</p>
        <p className="text-sky-900 hover:text-purple-500">The quick brown fox</p>
        <br />
        10. Text Decoration
        <p className="underline">The quick brown fox</p>
        <p className="overline">The quick brown fox</p>
        <p className="line-through">The quick brown fox</p>
        <p className="no-underline">The quick brown fox</p>
        <p className="underline decoration-solid">The quick brown fox</p>
        <p className="underline decoration-double">The quick brown fox</p>
        <p className="underline decoration-dotted">The quick brown fox</p>
        <p className="underline decoration-dashed">The quick brown fox</p>
        <p className="underline decoration-wavy">The quick brown fox</p>
        <br />
        11. Background Color 
        <div className="bg-indigo-500">Background Color</div>
        <div className="bg-rose-500">Background Color</div>
        <div className="bg-teal-500">Background Color</div>
        <br />
        12.  Width 
        <div className="w-full bg-indigo-300">w-full</div>
        <div className="w-96 bg-indigo-400">w-96</div>
        <div className="w-80 bg-indigo-500">w-80</div>
        <div className="w-64 bg-indigo-600">w-64</div>
        <div className="w-48 bg-indigo-700">w-48</div>
        <div className="w-40 bg-indigo-800">w-40</div>
        <div className="w-32 bg-indigo-900 text-gray-50">w-32</div>
        <div className="w-24 bg-indigo-950 text-gray-50">w-24</div>
        <div className="w-[500px] bg-indigo-500">w-custom</div>
        <br /> 
        13. Height 
        <div className=" h-96 w-96 bg-indigo-300">h-96</div>
        <div className="h-80 w-80 bg-indigo-400">h-80</div>
        <div className="h-64 w-64 bg-indigo-500">h-64</div>
        <div className="h-48 w-48 bg-indigo-600">h-48</div>
        <div className="h-40 w-40 bg-indigo-700">h-40</div>
        <div className="h-32 w-32 bg-indigo-800">h-32</div>
        <div className="h-screen w-screen bg-indigo-800 text-gray-50">Dynamic Resolution</div>
        <div className="h-[100px] w-24 bg-indigo-900 text-gray-50">h-custom</div>
        <br />
  
        14. Padding
        <div className="pt-6 bg-slate-500">pt-6</div>
        <div className="pr-4 bg-rose-500">pr-4</div>
        <div className="pb-8 bg-indigo-500">pb-8</div>
        <div className="pl-2 bg-teal-500">pl-2</div>
        <div className="py-2 bg-sky-500">py-2</div>
        <div className="px-2 bg-gray-500">px-2</div>
        <div className="p-[50px] bg-purple-500">Padding Custom</div>
        <br />
        15. Margin
        <div className="mt-6 bg-slate-500">mt-6</div>
        <div className="mr-4 bg-rose-500">mr-4</div>
        <div className="mb-8 bg-indigo-500">mb-8</div>
        <div className="ml-2 bg-teal-500">ml-2</div>
        <div className="my-2 bg-sky-500">my-2</div>
        <div className="mx-2 bg-gray-500">mx-2</div>
        <div className="m-[50px] bg-purple-500">Margin Custom</div>
        <br />
  
  
        16. Justify Content + Gap 
        <div className="flex justify-start bg-cyan-200 gap-2">
          <div className="p-2 rounded-lg bg-sky-500">01</div>
          <div className="p-2 rounded-lg bg-sky-500">02</div>
          <div className="p-2 rounded-lg bg-sky-500">03</div>
        </div>
        <br />
        <div className="flex justify-center bg-cyan-200 gap-2">
          <div className="p-2 rounded-lg bg-sky-500">01</div>
          <div className="p-2 rounded-lg bg-sky-500">02</div>
          <div className="p-2 rounded-lg bg-sky-500">03</div>
        </div>
        <br />
        <div className="flex justify-end bg-cyan-200 gap-2">
          <div className="p-2 rounded-lg bg-sky-500">01</div>
          <div className="p-2 rounded-lg bg-sky-500">02</div>
          <div className="p-2 rounded-lg bg-sky-500">03</div>
        </div>
        <br />
        <div className="flex justify-between bg-cyan-200 gap-2">
          <div className="p-2 rounded-lg bg-sky-500">01</div>
          <div className="p-2 rounded-lg bg-sky-500">02</div>
          <div className="p-2 rounded-lg bg-sky-500">03</div>
        </div>
        <br />
  
        17. Borders 
        <div className="rounded w-40 text-center border-2 border-rose-500">
          rounded
        </div>
        <div className="rounded-md w-40 text-center border-4 border-indigo-500">
          rounded-md
        </div>
        <div className="rounded-lg w-40 text-center border-2 border-teal-500">
          rounded-lg
        </div>
        <div className="rounded-full w-40 text-center border-8 border-sky-500">
          rounded-full
        </div>
        <div className="rounded-[100px] w-40 text-center border-[3px] border-slate-500">
          rounded-custom
        </div>
        <br />
        18. Flex 
        <div className="flex">
          <div className="flex-none w-14 h-14 bg-sky-500">flex-none Lorem ipsum dolor sit amet</div>
          <div className="flex-initial w-64 bg-violet-500">flex-initial Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus esse magnam est praesentium modi tempore fuga necessitatibus suscipit</div>
          <div className="flex-auto w-32 bg-sky-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem autem veniam nisi amet quaerat odio tempora quam, quis consequatur omnis. Maxime eius repellat quaerat nesciunt dolorem ex labore sint dolores.
          </div>
        </div>
        <br />
        <br />
        <br />
  
        19. Cursor 
        <br />
        <button type="button" className="cursor-pointer bg-rose-500 p-2 rounded-md">Submit</button>
        <br />
        <br />
        <button type="button" className="cursor-progress bg-indigo-500 p-2 rounded-md">Saving</button>
        <br />
        <br />
        <button type="button" disabled className="cursor-not-allowed bg-emerald-500 p-2 rounded-md">Confirm</button>
        <br />
        <br />
  
        20. Shadow 
        <div className="bg-cyan-500 shadow-md shadow-cyan-500/50 w-40 rounded-xl text-center py-2">
          Subscribe
        </div>
        <br />
        <div className="bg-blue-500 shadow-lg shadow-blue-500/50 w-40 rounded-xl text-center py-2">
          Like
        </div>
        <br />
        <div className="bg-indigo-500 shadow-lg shadow-indigo-500/50 w-40 rounded-xl text-center py-2">
          Share
        </div>
        <br />
        
        21. Display 
        <div>
          When Controlling the flow of text using css property 
          <span className="inline bg-slate-500">
            display-inline - Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Optio inventore exercitationem voluptate? Repellat 
            similique commodi sequi autem obcaecati, dignissimos ipsam doloremque quibusdam 
            eaque sed placeat officia quo exercitationem eum ut.
          </span>
          Will cause the next inside the element to wrap normally
        </div>
        <br />
        <div>
          When Controlling the flow of text using css property 
          <span className="inline-block bg-slate-500">
            display: inline-block - Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Optio inventore exercitationem voluptate? Repellat 
            similique commodi sequi autem obcaecati, dignissimos ipsam doloremque quibusdam 
            eaque sed placeat officia quo exercitationem eum ut.
          </span>
          Will cause the next inside the element to wrap normally
        </div>
        <br />
        <div>
          When Controlling the flow of text using css property 
          <span className="block bg-slate-500">
            display: block - Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Optio inventore exercitationem voluptate? Repellat 
            similique commodi sequi autem obcaecati, dignissimos ipsam doloremque quibusdam 
            eaque sed placeat officia quo exercitationem eum ut.
          </span>
          Will cause the next inside the element to wrap normally
        </div>
      </>
      
    )
  }
  
  export default Contek
  