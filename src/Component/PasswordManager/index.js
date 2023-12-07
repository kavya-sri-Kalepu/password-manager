import {Component} from 'react'
import {v4} from 'uuid'
import InputSection from '../InputSection'
import './index.css'

class PasswordManager extends Component {
  state = {
    ItemsList: [],
    website: '',
    username: '',
    password: '',
    search: '',
    showPassword: false,
  }

  onChangeWebsite = e => {
    this.setState({website: e.target.value})
  }

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  formSubmit = e => {
    e.preventDefault()
    const {website, username, password} = this.state
    const newItem = {
      id: v4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      ItemsList: [...prevState.ItemsList, newItem],
      website: '',
      username: '',
      password: '',
    }))
  }

  onChangeSearch = e => {
    this.setState({search: e.target.value})
  }

  toggledCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  deleteBtnClicked = id => {
    const {ItemsList} = this.state
    const updatedList = ItemsList.filter(item => item.id !== id)

    this.setState({ItemsList: updatedList})
  }

  render() {
    const {
      website,
      username,
      password,
      ItemsList,
      search,
      showPassword,
    } = this.state
    const filteredListItems = ItemsList.filter(each =>
      each.website.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="main-container-body">
        <div className="main-container">
          <div className="main-container-top-logo">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
              alt="app-logo"
            />
          </div>
          <div className="main-container-input-section">
            <div className="container-left">
              <div className="container-left-form-main-sec">
                <h1>Add New Password</h1>
                <form onSubmit={this.formSubmit}>
                  <div className="form-input">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                    />
                    <input
                      type="text"
                      placeholder="Enter Website"
                      onChange={this.onChangeWebsite}
                      value={website}
                    />
                  </div>
                  <div className="form-input">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                    />
                    <input
                      type="text"
                      placeholder="Enter Username"
                      onChange={this.onChangeUsername}
                      value={username}
                    />
                  </div>
                  <div className="form-input">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                    />
                    <input
                      type="password"
                      placeholder="Enter Password"
                      onChange={this.onChangePassword}
                      value={password}
                    />
                  </div>
                  <div className="submit-btn">
                    <input type="submit" value="Add" />
                  </div>
                </form>
              </div>
            </div>
            <div className="container-right">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
              />
            </div>
          </div>

          <div className="main-container-input-section pt">
            <div className="bottom-top-header">
              <div className="bottom-top-header-left">
                <h3>Your Passwords</h3>
                <span>{filteredListItems.length}</span>
              </div>
              <div className="bottom-top-header-right">
                <div className="form-input">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                  />
                  <input
                    type="search"
                    placeholder="search"
                    onChange={this.onChangeSearch}
                    value={search}
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="show-password-section">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={this.toggledCheckbox}
              />
              <h3>Show Password</h3>
            </div>
            {filteredListItems.length === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no password"
                className="no-password"
              />
            ) : (
              <InputSection
                AllItemsList={filteredListItems}
                showPassword={showPassword}
                deleteBtnClicked={this.deleteBtnClicked}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
