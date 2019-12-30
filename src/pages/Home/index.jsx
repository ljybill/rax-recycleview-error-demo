import {createElement} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import ScrollView from "rax-scrollview/lib";
import RecyclerView from 'rax-recyclerview';

import styles from './index.css';

import Logo from '../../components/Logo';

export default function Home() {
    return (
        <RecyclerView>
            <RecyclerView.Cell>
                <ScrollView horizontal={true}>
                    <Text style={styles.title}>tab1</Text>
                    <Text style={styles.title}>tab2</Text>
                    <Text style={styles.title}>tab3</Text>
                    <Text style={styles.title}>tab4</Text>
                    <Text style={styles.title}>tab5</Text>
                    <Text style={styles.title}>tab6</Text>
                    <Text style={styles.title}>tab7</Text>
                    <Text style={styles.title}>tab8</Text>
                    <Text style={styles.title}>tab9</Text>
                    <Text style={styles.title}>tab10</Text>
                </ScrollView>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Logo/>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.info}>Visit https://rax.js.org</Text>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.info}>More information about Rax</Text>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.info}>More information about Rax</Text>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.info}>More information about Rax</Text>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.info}>More information about Rax</Text>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.info}>More information about Rax</Text>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.info}>More information about Rax</Text>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.info}>More information about Rax</Text>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.info}>More information about Rax</Text>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.info}>More information about Rax</Text>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.info}>More information about Rax</Text>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.info}>More information about Rax</Text>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.info}>More information about Rax</Text>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.info}>More information about Rax</Text>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.info}>More information about Rax</Text>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.info}>More information about Rax</Text>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.info}>More information about Rax</Text>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.info}>More information about Rax</Text>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.info}>More information about Rax</Text>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.info}>More information about Rax</Text>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.info}>More information about Rax</Text>
            </RecyclerView.Cell>
            <RecyclerView.Cell>
                <Text style={styles.title}>Welcome to Your Rax App</Text>
            </RecyclerView.Cell>
        </RecyclerView>
    );
}
