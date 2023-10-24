"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_native_2 = require("react-native");
var BottomSheet_1 = require("../tabs/BottomSheet");
var MaterialCommunityIcons_1 = require("react-native-vector-icons/MaterialCommunityIcons");
var react_native_paper_1 = require("react-native-paper");
var CardStyle_1 = require("../Style/CardStyle");
var react_native_modal_1 = require("react-native-modal");
var FontAwesome_1 = require("react-native-vector-icons/FontAwesome");
var native_1 = require("@react-navigation/native");
var react_native_element_dropdown_1 = require("react-native-element-dropdown");
var Proposer = function (_a) {
    var navigation = _a.navigation;
    var route = native_1.useRoute();
    var token = route.params.token;
    var _b = react_1["default"].useState({}), checkedIngredients = _b[0], setCheckedIngredients = _b[1];
    var _c = react_1["default"].useState({}), checkedType = _c[0], setCheckedType = _c[1];
    var ref = react_1.useRef(null);
    var _d = react_1["default"].useState({}), selectype = _d[0], setSelectype = _d[1];
    var _e = react_1["default"].useState({}), selectIng = _e[0], setSelectIng = _e[1];
    var _f = react_1["default"].useState([]), type = _f[0], setType = _f[1];
    var _g = react_1["default"].useState([]), dat = _g[0], setDat = _g[1];
    var _h = react_1["default"].useState(''), buMin = _h[0], setBuMin = _h[1];
    var _j = react_1["default"].useState(''), buMax = _j[0], setBuMax = _j[1];
    var _k = react_1["default"].useState(''), nbr = _k[0], setNbr = _k[1];
    var _l = react_1["default"].useState(null), country = _l[0], setCountry = _l[1];
    var _m = react_1["default"].useState(false), isFocus = _m[0], setIsFocus = _m[1];
    var handleCheckboxChange = function (ingredientId) {
        var _a;
        console.log(ingredientId + " ingredientsIDD");
        setCheckedIngredients(__assign(__assign({}, checkedIngredients), (_a = {}, _a[ingredientId] = !checkedIngredients[ingredientId], _a)));
        console.log(react_1["default"].createElement("checkedIngredients", { className: "length" }) + " lenght check");
    };
    var handleCheckboxtype = function (idtype) {
        var _a;
        console.log(idtype + " idtype");
        setCheckedType(__assign(__assign({}, checkedType), (_a = {}, _a[idtype] = !checkedType[idtype], _a)));
        console.log(checkedType + " lenght check");
    };
    react_1["default"].useEffect(function () {
        console.log("usee");
        console.log("token '" + token + "'");
        console.log(selectype + " selectType");
        console.log(selectIng + " selectIngredient");
    }, [selectIng, selectype]);
    var typeplat = function () {
    };
    var _o = react_1["default"].useState([
        { id: 1, label: 'Élément 1' + ' -  ', isChecked: false },
        { id: 2, label: 'Élément 2', isChecked: false },
        { id: 3, label: 'Élément 3', isChecked: false },
    ]), dataCheck = _o[0], setData = _o[1];
    var toggleCheckbox = function (id) {
        "";
        setData(function (prevData) {
            return prevData.map(function (item) {
                return item.id === id ? __assign(__assign({}, item), { isChecked: !item.isChecked }) : item;
            });
        });
    };
    var _p = react_1["default"].useState(null), selectedOption = _p[0], setSelectedOption = _p[1];
    var handleSelect = function (index, value) {
        setSelectedOption(value);
    };
    var onPress = react_1.useCallback(function () {
        var _a, _b, _c;
        var isActive = (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.isActive();
        if (isActive) {
            (_b = ref === null || ref === void 0 ? void 0 : ref.current) === null || _b === void 0 ? void 0 : _b.scrollTo(0);
        }
        else {
            (_c = ref === null || ref === void 0 ? void 0 : ref.current) === null || _c === void 0 ? void 0 : _c.scrollTo(-200);
        }
        fetch('http://26.22.221.140:8001/tiatanindrazana/Typeplat', {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token }
            //  body: JSON.stringify({"email":email,"motdepasse":password})
        })
            .then(function (response) { return response.json(); })
            .then(function (resultat) {
            // Mettez à jour l'état avec les données obtenues
            console.log(resultat);
            console.log(resultat.data[0].id + " daatataaaaa");
            setType(resultat.data);
            //  console.log(type[0].val +"typeee")
        })["catch"](function (error) {
            console.error('Erreur lors de la récupération des données:', error);
        });
        if (type.length > 0) {
            var updatedData = type.map(function (ingredient) { return (__assign(__assign({}, ingredient), { checked: true })); });
            setData(updatedData);
        }
        console.log(type.length + "   type");
    }, []);
    var validerType = function () {
        var _a, _b, _c;
        var select = Object.keys(checkedType).filter(function (id) { return checkedType[id]; });
        console.log(select + " avant");
        setSelectype(select);
        console.log(selectype + " selecteddd typeeee");
        var isActive = (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.isActive();
        if (isActive) {
            (_b = ref === null || ref === void 0 ? void 0 : ref.current) === null || _b === void 0 ? void 0 : _b.scrollTo(0);
        }
        else {
            (_c = ref === null || ref === void 0 ? void 0 : ref.current) === null || _c === void 0 ? void 0 : _c.scrollTo(-200);
        }
    };
    var validerIng = function () {
        console.log(selectIng.length);
        var select = Object.keys(checkedIngredients).filter(function (id) { return checkedIngredients[id]; });
        console.log(select);
        setSelectIng(select);
        console.log(selectIng + " selecteddddd");
        if (selectIng.length = 0) {
            console.log("null");
        }
        else {
        }
        // console.log(select+" selecteddd");
        console.log(checkedIngredients + " avant");
        // checkedIngredients.map(ing)=>{
        // console.log(ing+' checkkk')
        //});
        setModalVisible(false);
    };
    var _q = react_1["default"].useState(false), modalVisible = _q[0], setModalVisible = _q[1];
    var validerProposition = function () {
        console.log(Object.keys(selectype).length);
        if (Object.keys(selectype).length === 0) {
            console.log('tsy maintsy misy type ');
        }
        else {
            if (!buMax) {
                setBuMax('0');
            }
            if (!buMin) {
                setBuMin('0');
            }
            if (!nbr) {
                setNbr('1');
            }
            if (!country) {
                setCountry('1');
            }
            fetch('http://26.22.221.140:8001/tiatanindrazana/Proposer?ingredient=' + selectIng + '&type=' + selectype + '&budgetMin=' + buMin + '&budgetMax=' + buMax + '&nbrPers=' + nbr, {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token }
                //  body: JSON.stringify({"email":email,"motdepasse":password})
            })
                .then(function (response) { return response.json(); })
                .then(function (resultat) {
                //  console.log(resultat.data);
                console.log(resultat + " ity");
                navigation.navigate("Proposition", { token: token, proposition: resultat });
                //   console.log("coucououuu   "+resultat);
                // setDat(resultat['data']);
                /* if (dat.length > 0) {
                   const updatedData = dat.map((ingredient) => ({
                     checked: true,
                     ...ingredient,
                     
                   }));
                   setCheckedIngredients(updatedData);
                 }*/
            })["catch"](function (error) {
                console.error('Erreur lors de la récupération des données:', error);
            });
            console.log(dat.length);
        }
    };
    var showModal = function () {
        setModalVisible(true);
        fetch('http://26.22.221.140:8001/tiatanindrazana/Ingredient_Interdit', {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token }
            //  body: JSON.stringify({"email":email,"motdepasse":password})
        })
            .then(function (response) { return response.json(); })
            .then(function (resultat) {
            // Mettez à jour l'état avec les données obtenues
            console.log("coucououuu   " + resultat);
            setDat(resultat['data']);
            /* if (dat.length > 0) {
               const updatedData = dat.map((ingredient) => ({
                 checked: true,
                 ...ingredient,
                 
               }));
               setCheckedIngredients(updatedData);
             }*/
        })["catch"](function (error) {
            console.error('Erreur lors de la récupération des données:', error);
        });
        console.log(dat.length);
    };
    var hideModal = function () {
        setModalVisible(false);
    };
    var data = [
        { label: 'Jour', value: '1' },
        { label: 'Semaine', value: '2' },
    ];
    return (react_1["default"].createElement(react_native_gesture_handler_1.GestureHandlerRootView, { style: { flex: 1, backgroundColor: 'white' } },
        react_1["default"].createElement(react_native_1.View, { style: { position: "absolute" } },
            react_1["default"].createElement(react_native_1.ImageBackground, { source: require("../../assets/aa.jpg"), style: { width: '108%', justifyContent: 'center', position: 'absolute', flex: 1,
                    height: 280, borderRadius: 150 }, resizeMode: "cover", borderRadius: 12 }),
            react_1["default"].createElement(react_native_2.Text, { style: { color: 'black', fontSize: 100, marginBottom: 10, fontWeight: 'bold', letterSpacing: 2, justifyContent: 'center', textAlign: 'center' } }),
            react_1["default"].createElement(react_native_paper_1.Card, { style: CardStyle_1["default"].card },
                react_1["default"].createElement(react_native_paper_1.Card.Content, null,
                    react_1["default"].createElement(react_native_2.Text, { style: { color: 'black', fontSize: 30, marginBottom: 20, fontWeight: 'bold', letterSpacing: 2, justifyContent: 'center', textAlign: 'center' } }, "A completer"),
                    react_1["default"].createElement(react_native_gesture_handler_1.TextInput, { style: CardStyle_1["default"].input, onChangeText: function (text) { return setBuMin(text); }, placeholder: "Budget Min" }),
                    react_1["default"].createElement(react_native_gesture_handler_1.TextInput, { style: CardStyle_1["default"].input, onChangeText: function (text) { return setBuMax(text); }, placeholder: "Budget Max" }),
                    react_1["default"].createElement(react_native_1.View, { style: { flexDirection: 'row', justifyContent: 'flex-end' } },
                        react_1["default"].createElement(react_native_2.Text, null,
                            " ",
                            react_1["default"].createElement(react_native_element_dropdown_1.Dropdown, { style: [CardStyle_1["default"].input3, isFocus && { borderColor: 'blue' }], placeholderStyle: CardStyle_1["default"].placeholderStyle, selectedTextStyle: CardStyle_1["default"].selectedTextStyle, inputSearchStyle: CardStyle_1["default"].inputSearchStyle, iconStyle: CardStyle_1["default"].iconStyle, data: data, search: true, maxHeight: 300, labelField: "label", valueField: "value", placeholder: !isFocus ? 'Option' : '...', searchPlaceholder: "Search...", value: country, onFocus: function () { return setIsFocus(true); }, onBlur: function () { return setIsFocus(false); }, onChange: function (item) {
                                    setCountry(item.value);
                                    setIsFocus(false);
                                } })),
                        react_1["default"].createElement(react_native_gesture_handler_1.TextInput, { placeholder: "Nbr Pers", style: CardStyle_1["default"].input3, onChangeText: function (text) { return setNbr(text); } })),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: showModal, style: CardStyle_1["default"].input },
                        react_1["default"].createElement(react_native_paper_1.Button, null,
                            react_1["default"].createElement(react_native_2.Text, { style: { color: 'grey', fontSize: 15 } }, "Ingredients ..."))),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onPress, style: CardStyle_1["default"].input },
                        react_1["default"].createElement(react_native_paper_1.Button, null,
                            react_1["default"].createElement(react_native_2.Text, { style: { color: 'grey', fontSize: 15 } },
                                " Type plat ",
                                react_1["default"].createElement(MaterialCommunityIcons_1["default"], { name: "transfer-down", size: 18 })))),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: validerProposition },
                        react_1["default"].createElement(react_native_paper_1.Button, { style: CardStyle_1["default"].btn },
                            react_1["default"].createElement(react_native_2.Text, { style: { color: 'white', fontSize: 15 } }, "Valider")))))),
        react_1["default"].createElement(react_native_1.View, { style: styles.container },
            react_1["default"].createElement(BottomSheet_1["default"], { ref: ref },
                react_1["default"].createElement(react_native_1.View, { style: { flex: 1, backgroundColor: 'white', padding: 20 } },
                    react_1["default"].createElement(react_native_gesture_handler_1.ScrollView, { style: {} },
                        react_1["default"].createElement(react_native_2.Text, { style: { color: 'black', fontSize: 30, marginBottom: 20, fontWeight: 'bold', letterSpacing: 2, justifyContent: 'center', textAlign: 'center' } }, "Types \u00E0 choisir"),
                        type.map(function (typee) { return (react_1["default"].createElement(react_native_1.View, { key: typee.id, style: { flexDirection: 'row' } },
                            react_1["default"].createElement(react_native_2.Text, null,
                                " ",
                                react_1["default"].createElement(react_native_paper_1.Checkbox, { status: checkedType[typee.id] ? 'checked' : 'unchecked', onPress: function () { return handleCheckboxtype(typee.id); } }),
                                " "),
                            react_1["default"].createElement(react_native_2.Text, null, typee.VAL))); })),
                    react_1["default"].createElement(react_native_paper_1.Button, { onPress: validerType, style: {} }, "Valider"),
                    react_1["default"].createElement(react_native_paper_1.Button, { onPress: onPress }, "Annuler"),
                    react_1["default"].createElement(react_native_2.Text, { style: { color: 'black', fontSize: 40, marginBottom: 100, fontWeight: 'bold', letterSpacing: 2, justifyContent: 'center', textAlign: 'center' } })))),
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_modal_1["default"], { isVisible: modalVisible, animationInTiming: 300, onBackdropPress: hideModal, backdropTransitionOutTiming: 1, animationIn: "fadeIn", animationOut: "fadeOut", animationOutTiming: 1, swipeDirection: "down", backdropTransitionInTiming: 1, style: {} },
                react_1["default"].createElement(react_native_1.View, { style: { flex: 1, backgroundColor: 'white', padding: 20, borderRadius: 18 } },
                    react_1["default"].createElement(react_native_2.Text, { style: { color: 'black', alignItems: 'center', fontSize: 25, fontWeight: 'bold', marginTop: 5 } }, " Ingr\u00E9dients \u00E0 \u00E9viter"),
                    react_1["default"].createElement(react_native_2.Text, { style: { color: 'black', alignItems: 'center', fontSize: 5, marginTop: 5 } }),
                    react_1["default"].createElement(react_native_1.View, { style: { flexDirection: 'row', alignItems: 'center' } },
                        react_1["default"].createElement(react_native_gesture_handler_1.TextInput, { style: CardStyle_1["default"].input2, placeholder: "Recherche ingr\u00E9dient" }),
                        react_1["default"].createElement(react_native_paper_1.Button, { style: { width: 20, paddingHorizontal: 10, backgroundColor: 'gray' } },
                            react_1["default"].createElement(FontAwesome_1["default"], { name: 'search', size: 20, color: "white" }),
                            "    ")),
                    react_1["default"].createElement(react_native_gesture_handler_1.ScrollView, null,
                        dat.map(function (ingredient, index) { return (react_1["default"].createElement(react_native_1.View, { key: index, style: { flexDirection: 'row', justifyContent: 'flex-end' } },
                            react_1["default"].createElement(react_native_2.Text, null,
                                ingredient.ingredient,
                                " - ",
                                ingredient.prenom),
                            react_1["default"].createElement(react_native_paper_1.Checkbox, { status: checkedIngredients[ingredient.idingredient] ? 'unchecked' : 'checked', onPress: function () { return handleCheckboxChange(ingredient.idingredient); } }),
                            react_1["default"].createElement(react_native_gesture_handler_1.TextInput, { style: CardStyle_1["default"].input3 }))); }),
                        react_1["default"].createElement(react_native_2.Text, { style: { color: 'black', fontSize: 30, marginBottom: 60, fontWeight: 'bold', letterSpacing: 2, justifyContent: 'center', textAlign: 'center' } })),
                    react_1["default"].createElement(react_native_1.View, { style: { flexDirection: 'row', marginTop: 20 } },
                        react_1["default"].createElement(react_native_paper_1.Button, { onPress: validerIng, style: {} }, "Valider"),
                        react_1["default"].createElement(react_native_paper_1.Button, { onPress: hideModal }, "Annuler")))))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#111',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        // flex:1,
        marginTop: 10,
        marginBottom: 10,
        width: 240,
        height: 40,
        alignItems: 'center',
        //  position: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 100,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor: 'pink',
        color: 'black',
        fontFamily: 'poppins-bold',
        aspectRatio: 1,
        opacity: 0.6
    }
});
exports["default"] = Proposer;
