
class LearnerHelper
    @@learner_status = {:slow_starter => 'Slow starter', :getting_there => 'Getting there', :super_user => 'Super user'}

    def self.evaluate_learner_activity(activity_summary)
        learner_activity = []
        learner_activity.push(get_number_days_active(activity_summary))
        learner_activity.push(get_longest_streak(activity_summary))
        learner_activity.push(get_user_status(activity_summary))
    end

    def self.get_number_days_active(activity_summary)
        days_active = activity_summary.select do |element|
            element == 1
        end
        days_active.length()
    end

    def self.get_longest_streak(activity_summary)
        streak = 0
        longest_streak = 0
 
        activity_summary.each do |element| 
            streak = element == 1 ? (streak += 1) : 0
            longest_streak = streak > longest_streak ? streak : longest_streak
        end
        longest_streak
    end

    def self.get_user_status(activity_summary) 
        status = ''
        last_seven_days = activity_summary.slice((activity_summary.length()-7), activity_summary.length())
        # print last_seven_days
        last_seven_days = last_seven_days.select do |x|
            x == 1 
        end 
        if last_seven_days.length() <= 2
            status = @@learner_status[:slow_starter]
        elsif last_seven_days.length() > 2 && last_seven_days.length() <= 4
            status = @@learner_status[:getting_there]
        else 
            status = @@learner_status[:super_user]
        end
        status 
    end
end
  