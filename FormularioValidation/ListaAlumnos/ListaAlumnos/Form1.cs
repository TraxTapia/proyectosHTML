using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ListaAlumnos
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void textBox3_TextChanged(object sender, EventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void toolStripLabel1_Click(object sender, EventArgs e)
        {
            if (!ValidationMatricula())
            {
                return;
            }

            if (!ValidationName())
            {
                return;
            }
            if (!ValidationCarrera())
            {
                return;
            }
        }

        public bool ValidationMatricula()
        {
            if (string.IsNullOrEmpty(txtMatricula.Text))
            {
                errorProvider1.SetError(txtMatricula, "La matricula no puede estar vacia");
                return false;
            }
            else
            {
                errorProvider1.SetError(txtMatricula, "");
                return true;
            }
        }
        public bool ValidationName()
        {
            if (string.IsNullOrEmpty(txtNombre.Text))
            {
                errorProvider1.SetError(txtNombre, "El campo nombre no puede estar vacio");
                return false;
            }
            else
            {
                errorProvider1.SetError(txtNombre, "");
                return true;
            }
        }
        public bool ValidationCarrera()
        {
            if (string.IsNullOrEmpty(cbxCarrera.Text))
            {
                errorProvider1.SetError(cbxCarrera, "El campo carrera no puede estar vacio");
                return false;
            }
            else
            {
                errorProvider1.SetError(cbxCarrera, "");
                return true;
            }
        }
        private void toolStripLabel2_Click(object sender, EventArgs e)
        {

        }

        private void toolStripLabel3_Click(object sender, EventArgs e)
        {

        }

        private void toolStripLabel4_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }
    }
}
