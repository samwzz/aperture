Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :photos, only: [:index, :create, :show, :update, :destroy]
    resources :albums, only: [:create, :show, :update, :destroy]
    
    resources :users do
      resources :photos, only: [:index]
      resources :albums, only: [:index]
    end
  end
end
