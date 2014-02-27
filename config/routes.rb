AjaxCommentDemo::Application.routes.draw do

  root 'comments#index'
  resources :comments, only: [:index]
  resources :photos, only: [:index]
end
