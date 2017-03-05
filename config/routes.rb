Rails.application.routes.draw do
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	root :to => "home#index"
	get "*unmatched_route" => "home#index"
	get "portfolio", to: "portfolio#index" 
	resources :contacts, only: :create
	get '/contacts', to: 'contacts#new', as: 'new_contact'
end
