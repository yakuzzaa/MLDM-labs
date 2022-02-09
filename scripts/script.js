var mas1;
var mas2;
var error;
/*
Определение кол-во вхождения элемента
 */
function counter_for_elements(mas,element)
{
   let count = 0;
   for(let i = 0; i < mas.length; i++)
      if (mas[i] === element)
      {
         count++;
      }
   return count;

}
/*
Преобразование строки в массив
 */
function for_mas(massive)
{
   var mas;
   if (massive.length > 0) {
      mas = massive.split(" ");
   }
   for (let i = 0; i < mas.length; i++)
   {
      if (counter_for_elements(mas, mas[i]) > 1) {
         mas.splice(i, 1);
         i--;
      }
   }
   return mas;
}
/*
Функции для проверки корректности ввода данных
ccjb
c-цифра c-цифра j-нечетная цифра b-буква
 */

function count_four(massive_element)
{
   return massive_element.length === 4;

}
function is_this_integer(symbol)
{
   return symbol < 'a' || symbol > 'z';

}
function is_this_nechet(symbol)
{
   if (symbol <'a' || symbol > 'z')
   {
      return Number(symbol) % 2 === 1;
   }
   else
   {
      return false
   }
}

function is_this_string(symbol)
{
   return symbol >= 'a' && symbol <= 'z';
}
function error_finder(massive_element) {
   return (count_four(massive_element) === false) || (is_this_integer(massive_element[0]) === false) || (is_this_integer(massive_element[1]) === false) || (is_this_nechet(massive_element[2]) === false) || (is_this_string(massive_element[3]) === false);
}

function validate(mas) {
   error = '';
   var flag = true;
   if (mas.length > 0) {
      for (let i = 0; i < mas.length; i++) {
         if (error_finder(mas[i]) === true) {
            error += 'Ошибка при вводе массива: ' + mas + ' В элементе: ' + mas[i] + '\n';
            flag = false;

         }

      }

   }
   else
   {
      error = 'Массив не должен быть пустым!';
   }
   return flag;
}

   /*
   Объединение множеств
    */
function unification(m1, m2) {
   let result = "";
   result = m1.join(',');
   for (let i = 0; i < m2.length; i++) {
      if (m1.indexOf(m2[i]) === -1)
         result += "," + m2[i];
   }
   return result;
}
/*
Пересечение множеств
 */
function intersection(m1,m2)
{
   var len;
   var small;
   var large;
   var result = "";
   if (m1.length >= m2.length)
   {
      len = m1.length;
      small = m2;
      large = m1;
   }
   else
   {
      len = m2.length;
      small = m1;
      large = m2;
   }

   for (let i = 0; i < len;i++)
   {
      if (large.indexOf(small[i]) >-1)
      {
         result += small[i] + ",";
      }

   }
   result = result.slice(0,-1);
   return result;
}
/*
Дополнение
 */
function addition(m1,m2)
{
   var len;
   var result_for_a = "";
   var result_for_b = "";
   var res;

   if (m1.length >= m2.length)
   {
      len = m1.length;
   }
   else
   {
      len = m2.length;
   }
   for (let i = 0; i < len;i++)
   {
      if (m1.indexOf(m2[i]) <= -1)
      {
         result_for_a += m2[i] + ",";
      }
   }
   for (let i = 0; i < len;i++)
   {
      if (m2.indexOf(m1[i]) <= -1)
      {
         if (m1[i] === undefined){
            continue;
         }
         result_for_b += m1[i] + ",";
      }
   }
   result_for_a = result_for_a.slice(0,-1);
   result_for_b = result_for_b.slice(0,-1);
   res = "Дополнение для первого множества: " + result_for_a +"\n" + "Дополнение для второго множества: " + result_for_b +"\n";
   return res;

}
/*
Симметрическая разность
 */
function symmetrical_difference(m1,m2)
{
   var len;
   var result_for_a = "";
   var result_for_b = "";
   var res;

   if (m1.length >= m2.length)
   {
      len = m1.length;
   }
   else
   {
      len = m2.length;
   }
   for (let i = 0; i < len;i++)
   {
      if (m1.indexOf(m2[i]) <= -1)
      {
         result_for_a += m2[i] + ",";
      }
   }
   for (let i = 0; i < len;i++)
   {
      if (m2.indexOf(m1[i]) <= -1)
      {
         if (m1[i] === undefined){
            continue;
         }
         result_for_b += m1[i] + ",";
      }
   }
   result_for_a = result_for_a.slice(0,-1);
   res = result_for_b + result_for_a;
   return res;
}

   /*
       Считывание данных и вызов второстепенных функций
    */
function calculate() {
   let full_result = "";
   var a = document.getElementById('mas1');
   var b = document.getElementById('mas2');
   var mas1 =for_mas(a.value);
   var mas2 =for_mas(b.value);
   if (validate(mas1)  === false) {
      alert(error);
   }
   if (validate(mas2)  === false) {
      alert(error);
   }
   if (validate(mas1)  === true && validate(mas2)  === true) {
      /*
        Вывод результатов операций над множествами
       */
      full_result = "Объединение массивов: " + unification(mas1, mas2) + "\n";
      full_result += "Пересечение массивов: " + intersection(mas1,mas2)+ "\n";
      full_result += addition(mas1,mas2);
      full_result += "Симметрическая разность массивов: " + symmetrical_difference(mas1,mas2);

   }
   document.getElementById('full-result').innerText = "Результат выполнения операций:\n " + full_result;

}



