package controllers

import javax.inject._
import play.api.mvc._

@Singleton
class UserController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def getProfile = Action {
    Ok(views.html.index("This is your profile!"))
  }

  def updateProfile = Action {
    Ok(views.html.index("You've updated your profile!"))
  }
}