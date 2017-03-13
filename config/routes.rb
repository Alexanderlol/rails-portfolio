Rails.application.routes.draw do
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	root to: 'home#index'
	resources :contacts, only: :create
	get 'contact', to: 'contacts#new', as: 'new_contact'
end
