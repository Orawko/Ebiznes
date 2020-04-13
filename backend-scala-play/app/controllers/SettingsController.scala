package controllers

import javax.inject._
import play.api.mvc._

@Singleton
class SettingsController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def getSettings = Action {
    Ok(views.html.index("Your settings!"))
  }

  def changeSettings = Action {
    Ok(views.html.index("You've changed your settings!"))
  }

  def restoreDefaultSettings = Action {
    Ok(views.html.index("Default settings restored!"))
  }
}