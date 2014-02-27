AjaxCommentDemo::Application.routes.draw do

  root 'comments#index'
  resources :comments
  resources :photos
end
