

const Video = () => {
    return (
        <div id="video" className="flex flex-col items-center py-16">
            <h1 className="font-bold text-lg sm:text-3xl text-darkpurple py-8">Video</h1>
            <iframe className="xs:h-auto xs:w-10/12 " src="https://www.youtube.com/embed/XxsPU6o-x-o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Video;