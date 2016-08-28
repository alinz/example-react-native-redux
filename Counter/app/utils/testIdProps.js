/**
 * Created by rotem on 28/08/2016.
 */
export default function (testID){
    return testID ? {
        testID: testID,
        accessible:true,
        accessibilityLabel:testID
    } : {};
};