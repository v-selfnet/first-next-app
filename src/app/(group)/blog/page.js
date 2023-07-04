import Link from "next/link";

export const metadata = {
    title: 'Blog | Next Hero',
    description: 'Next Hero Comming Soon',
}

const blogs = [
    {
        id: 1,
        year: 2014,
        title: "title 1"
    },
    {
        id: 2,
        year: 2015,
        title: "title 2"
    },
    {
        id: 3,
        year: 2016,
        title: "title 3"
    },
    {
        id: 4,
        year: 2017,
        title: "title 4"
    },
    {
        id: 5,
        year: 2018,
        title: "title 5"
    },
    {
        id: 6,
        year: 2019,
        title: "title 6"
    },
]

const BlogPage = () => {
    return (
        <div>
            <h1>This is [ Blog ] Home Page</h1>
            <ul className="mt-6">
                {
                    blogs.map(({ id, year, title }) => <Link
                        className="border border-red-500 p-2 mr-2 bg-yellow-500"
                        href={{
                            pathname: `blog/${year}/${id}`,
                            query: {
                                title: title,
                            },
                        }} key={id}>{title}</Link>)
                }
            </ul>
        </div >
    );
};

export default BlogPage;