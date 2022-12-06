class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # HOME
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  # INDEX
  get "/sweaters" do
    Sweater.all.to_json
  end

  # SHOW
  get "/sweaters/:id" do
    begin
      Sweater.find( params[:id] ).to_json
    rescue
      { error: "I AM A 404!!! YOU BROKE OUR WEBSITE!!!" }.to_json
    end
  end

  # CREATE
  post "/sweaters" do
    sweater = Sweater.create(params)

    sweater.to_json
  end

  # UPDATE
  patch "/sweaters/:id" do
    sweater = Sweater.find(params[:id])
    sweater.update(params)
    sweater.to_json
  end
  
  # DESTROY
  delete "/sweaters/:id" do
    begin
      sweater = Sweater.find(params[:id])
      sweater.destroy
      { message: "Poof gone", id: sweater.id }.to_json
    rescue
      { error: "404 couldn't delete that oh no" }.to_json
    end
  end

  # CUSTOM DESTROY ALL
  get"/destroy_all_sweaters" do
    Sweater.destroy_all
  end

end
