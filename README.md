# VNN: Vaccination News Notifier (for the Netherlands)

I live in the Netherlands, which has had a ........... different approach to coronavirus vaccination than ........... other countries. But now, it looks like they're doing some vaccinations! Now that that's happening, I want one. But how will I know when it's my turn to ask for an appointment? By checking the government website manually every 30 seconds until people with my birth year are announced as eligible for the vaccine? PAH I say!

This is a Node JS script that will check the RIVM coronavirus vaccination program news website, and notify me on my desktop as soon as new news is published.

## Usage

1. Run the script on the computer that you spend most of your time at.
2. When the script launches you'll get a notification confirming that the script is running*.
3. The script will look at the RIVM website every 30 seconds and notify you if they've published a new article. You should go [here](https://www.rivm.nl/en/covid-19-vaccination/news) to read the article.
4. The new articles seem to be published between 11am and 1pm daily, so make sure you're looking at your computer at that time of day!**
5. If your birth year has been called, congratulations, you're a real adult human person (maybe, I don't know), it's time for you to apply to get your vaccination! You can do that [on coronatest.nl](https://coronatest.nl/).

\* If you don't get the notification, I suspect the issue is that your system doesn't support notifications via node-notifier. If you'd like to submit a patch to fix this program for your system, go ahead!
\** Are you not someone who sits at a computer for the work hours? Might I suggest hacking this script to text your phone using Twilio or Vonage, or email you using Sendgrid (or something else)? If you do this, let me know 🙂.

## Disclaimer

This script looks at a public website to display public information, so my understanding is that it's ok to do this. However, if it is not OK to do this, please let me know, and I promise I will stop running the script and immediately remove the source code from the internet at the first suggestion of trouble.

## Conclusion

Please stay safe everyone. Get the vaccine as soon as you possibly can. I hope this script helps you do that. And please wear a mask and keep 2 meters away from anyone else when you're not at home. Coronavirus is no joke.
