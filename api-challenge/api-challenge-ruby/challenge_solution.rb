require 'httparty'

class App
    def self.get_movies(title_substr)
        begin
            response = HTTParty.get("https://jsonmock.hackerrank.com/api/movies/search/?Title=#{title_substr}")
            if response && response["data"] 
                # puts response["data"] 
                title_year = response["data"].map{|x| {:title => x["Title"], :year => x["Year"]} }
                puts title_year
            end
        rescue HTTParty::Error => e
            print e
        rescue StandardError => e
            print e
        end
    end
    get_movies('harry potter')
end