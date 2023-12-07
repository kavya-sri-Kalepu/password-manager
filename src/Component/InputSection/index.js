import './index.css'

const InputSection = props => {
  const {AllItemsList, showPassword, deleteBtnClicked} = props

  const deleteBtn = id => {
    deleteBtnClicked(id)
  }

  return (
    <ul>
      {AllItemsList.map(each => (
        <li key={each.id}>
          <div className="each-list-left">
            <span>{each.username[0]}</span>
          </div>
          <div className="each-list-middle">
            <h3>{each.website}</h3>
            <p>{each.username}</p>
            {showPassword ? (
              <p>{each.password}</p>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
              />
            )}
          </div>
          <div className="each-list-right">
            <button type="button" onClick={() => deleteBtn(each.id)}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                alt="delete"
              />
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default InputSection
