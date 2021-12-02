Rails.application.routes.draw do
  resources :statuses, only: [:index, :show, :create, :destroy]
  resources :infos, only: [:index, :show, :create]
  resources :trustees, only: [:index, :show]
  resources :users, only: [:index, :create]

  post '/login', to: "login#create"
  get '/info', to: "users#show"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
