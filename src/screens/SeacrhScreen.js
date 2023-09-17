import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import SeacrhBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SeacrhScreen = () =>{
    const [term, setTerm] = useState('');
    const [searchApi, results, errormessage] = useResults();

    const filterByPrice = (price) => {
        // price === '$' ||  '$$' || '$$$'
        return results.filter (result => {
            return result.price === price;
        });

    }; 

    return (
        <>
            <SeacrhBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}/>
           {errormessage ? <Text>{errormessage}</Text> : null}
           <ScrollView>
                <ResultsList results={filterByPrice('$')} title="Cost Effective"/>
                <ResultsList results={filterByPrice('$$')} title="Bit Pricier"/>
                <ResultsList results={filterByPrice('$$$')} title="Big Spender"/>
            </ScrollView>
        </>

    );
};

const styles = StyleSheet.create ({
        
});

export default SeacrhScreen;