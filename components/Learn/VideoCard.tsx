import Moment from "react-moment"

const VideoCard: React.FC<{
    article: any
}> = ({ article }) => {
    let link: string = ""
    let image = ""
    let title = ""
    let description = ""
    let publishedAt = ""
    // Tracer Drop playlist videos
    if (article.snippet && article.snippet.resourceId) {
        link = `https://www.youtube.com/watch?v=${article.snippet.resourceId.videoId}`
        image = article.snippet.thumbnails.high.url
        title = article.snippet.title
        description = article.snippet.description
        publishedAt = article.snippet.publishedAt
    } else if (article.items) {
        // In the media, single videos
        link = `https://www.youtube.com/watch?v=${article.items[0].id}`
        image = article.items[0].snippet.thumbnails.high.url
        title = article.items[0].snippet.title
        description = article.items[0].snippet.description
        publishedAt = article.items[0].snippet.publishedAt
    }

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <article className="mb-4 w-full overflow-hidden rounded-lg bg-white transition-all duration-300 [box-shadow:_0px_2px_4px_rgba(0,0,0,0.1)] hover:bg-action-cell hover:[box-shadow:_0px_2px_8px_rgba(26,85,245,0.2)]">
                <picture className="block h-[185px] w-full overflow-hidden sm:h-[203px]">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full scale-[1.2] object-cover xs:scale-[1.1] sm:scale-[1.25] md:scale-[1.1] lg:scale-[1.2] xl:scale-100"
                    />
                </picture>
                <div className="p-4">
                    <Moment
                        format="Do MMMM, YYYY"
                        className="text-[10px] text-highlight"
                    >
                        {publishedAt}
                    </Moment>
                    <h2 className="my-1 text-xl font-bold leading-[120%] text-action-active">
                        {title}
                    </h2>
                    <p className="post-description overflow-hidden text-sm leading-[20px] text-tertiary">
                        {description}
                    </p>
                </div>
            </article>
        </a>
    )
}

export default VideoCard
