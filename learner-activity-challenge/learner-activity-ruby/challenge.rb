
#    ***** INSTRUCTIONS ***** 
#   We want to get some learning activity data of our learners! 
#   You will receive an array as an input, containing 1s or 0s, based on whether or not a learner completed a 
#   lesson on that day (1 if they completed a lesson, 0 if not). 
  
#   Assume that the array can be for any time period, but the learner status is based on a 
#   rolling 7 day period (thus only take into account the last 7 days’ data).
  
#     Return an array containing 3 values:
#     1. number of days that the user completed a lesson
#     2. longest streak
#     3. level based on the last 7 days
  
#       User status rules
#     <= 2 'Slow starter' 
#     >2 && <= 4 'Getting there' 
#     >4 'Super user' 
  
#     Instructions
#     if you want to test you code, run the challenge_test.rb file and look at the console output to see if your tests passed
  
#       Example input
#      [1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0]
  
#     Example output
#     [13, 5, 'Super user']
  
    
class LearnerHelper

    def self.evaluate_learner_activity(activity_summary)
        # YOUR CODE HERE
    end
end
  
