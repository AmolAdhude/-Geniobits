import './index.css'

const LandingSection = () => (
  <div className="bg-container">
    <div className="task-container">
      <h1 className="task-heading">Task</h1>
    </div>
    <div className="responsive-container">
      <div className="description-container color1">
        <h1 className="heading">66</h1>
        <p className="description">ongoing</p>
      </div>
      <div className="description-container color2">
        <h1 className="heading">24</h1>
        <p className="description">Delayed</p>
      </div>
      <div className="description-container color3">
        <h1 className="heading">10</h1>
        <p className="description">Completed</p>
      </div>
      <div className="description-container color4">
        <h1 className="heading">100</h1>
        <p className="description">total assigned</p>
      </div>
    </div>
  </div>
)

export default LandingSection
