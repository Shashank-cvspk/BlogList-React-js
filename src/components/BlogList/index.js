// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div>
      <ul className="List-post">
        {blogsList.map(each => (
          <BlogItem key={each.id} detail={each} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
