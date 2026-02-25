import { useRouter } from "next/router"

const BlogSlug = () => {
    const {query} = useRouter();
    return (
        <div>
            Blog saat ini: {query.slug}
        </div>
    )
}

export default BlogSlug