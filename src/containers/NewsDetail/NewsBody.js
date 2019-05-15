import React from "react";
import {View, Text, StyleSheet} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ScrollView from "../../components/ScrollView";

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: "#fff",
        // paddingHorizontal: "3%",
    },
    container: {
        flex: 1,
        marginBottom: 200,
        padding: 10,
    },
    text: {
        fontFamily: "Nunito-Regular",
        fontSize: 14,
        color: "#000",
    },
    title: {
        fontFamily: "Nunito-SemiBold",
        fontSize: 15,
        marginVertical: 10,
    }
});


export default class NewsBodyContainer extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container} scrollViewStyle={styles.scrollView}>
                    <Text style={styles.text}>I remember the first outsourced recruiting engagement we took on. This was in 2010, our company had 12 people and one of our top clients asked us if we could put one of our recruiters onsite to take over their recruiting efforts. As most small companies would, we said yes, didn’t ask enough questions, and dove in headfirst.</Text>
                    <Text style={[styles.text, styles.title]}>Winning the Numbers Game</Text>
                    <Text style={styles.text}>Recruiting has and always will be a numbers game. Look at it like this, if you’re trying to bring on 30 new clients in 2019, you’ll need to develop a sales plan to do so. And this will most likely involve a sales funnel, because more likely than not, 30 companies aren’t guaranteed to jump in the boat. Smart companies approach recruiting in the same manner: They think backwards. If you want to hire 30 people, how many interviews are your hiring managers going to have to conduct? How many phone interviews need to happen? How many resumes do your recruiters need to review?</Text>
                    <Text style={[styles.text, styles.title]}>Understanding what a Recruiter actually does</Text>
                    <Text style={styles.text}>Amazon doesn’t have 1700 people individually doing those steps outlined above. They have a very well structured team, which is undoubtedly more complex than necessary for most companies. But the biggest takeaway is that companies break out all aspects of recruiting into individual functions and have people specialize. Let’s define a few of the roles involved in most TA departments.</Text>
                    <Text style={styles.text}>Remember, there are no silver bullets or Swiss army knives when it comes to hiring. Recruiting is hard. It has become an arms race. If you aren’t investing significant resources towards your efforts to bring in top talent, your company is going to struggle to keep up.</Text>
            </ScrollView>
        )
    }
}
