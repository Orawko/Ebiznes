package controllers

import javax.inject.{Inject, Singleton}
import play.api.mvc._

@Singleton
class BasketController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def  getProducts = Action {
    Ok(views.html.index("Your are in basket!"))
  }

  def  removeFromBasket = Action {
    Ok(views.html.index("Removing from basket!"))
  }

  def  addToBasket = Action {
    Ok(views.html.index("Adding an item!"))
  }

}
