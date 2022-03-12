// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {detail} = props
  const {title, description, publishedDate} = detail
  return (
    <li>
      <div className="item">
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div>
          <p>{publishedDate}</p>
        </div>
      </div>
      <hr />
    </li>
  )
}

export default BlogItem
